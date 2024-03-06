export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "GET") {
        const {name} = req.query;
        const callURL = url + name;
        const response = await fetch(callURL);
        const data = await response.json();
        const final_data = {
            name: data.name, 
            sprites: data.sprites,
            types: data.types}
        res.status(200).json(final_data);
    }
}