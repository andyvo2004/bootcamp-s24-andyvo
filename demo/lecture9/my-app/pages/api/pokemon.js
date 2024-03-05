const pokemonData = {};

export default async function handler(req, res) {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "GET") {
        if (name) {
            const callURL = url + name;
            const response = await fetch(callURL);
            const data = await response.json();
            res.status(200).json(data)
        }
    } else if (req.method === "POST") {
        if (!name) {
            res.status(400).json({ message: 'Pokemon name is required' });
            return;
        }

        const response = await fetch(callURL);

        if (!response.ok) {
            throw new Error(`Error fetching data for pokemon name: ${name}`);
          }
    }
}