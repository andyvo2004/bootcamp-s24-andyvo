export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/type/";

    if (req.method === "GET") {
        const {type} = req.query;
        const callURL = url + type;
        console.log(callURL);
        const response = await fetch(callURL);
        const data = await response.json();
        const final_data = {
            pokemon: data.pokemon}
        res.status(200).json(final_data);
    }
}