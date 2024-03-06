export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon-species/";

    if (req.method === "GET") {
        const {name} = req.query;
        const callURL = url + name;
        const speciesResponse = await fetch(callURL);
        const speciesData = await speciesResponse.json();
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        let evolutionData = await evolutionResponse.json();
        evolutionData = evolutionData.chain;
        while (true) {
            for (let i = 0; i < evolutionData.length; i++) {
                if (evolutionData[i].species.name === speciesData.name) {
                    evolutionData = evolutionData[i];
                }
            }
            if (evolutionData.length) {
                evolutionData = evolutionData[0];
            }
            if (evolutionData.species.name === speciesData.name) {
                if (evolutionData.evolves_to.length === 0) {
                    res.status(200).json(evolutionData);
                    return;
                }
                res.status(200).json(evolutionData.evolves_to);
                return;
            } else {
                evolutionData = evolutionData.evolves_to;
            }
        }
    }
}