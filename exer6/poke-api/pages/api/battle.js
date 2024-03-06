export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "POST") {
        const body = req.body;
        if (!body) {
            res.status(400).json({error: "insufficient information"});
            return;
        }
        const callURL1 = url + body.pokemon1;
        const response1 = await fetch(callURL1);
        const data1 = await response1.json();
        let total1 = 0;
        data1.stats.forEach((stat) => {
            total1 += stat.base_stat;
        })

        const callURL2 = url + body.pokemon2;
        const response2 = await fetch(callURL2);
        const data2 = await response2.json();
        let total2 = 0;
        data2.stats.forEach((stat) => {
            total2 += stat.base_stat;
        })
        
        if (total1 >= total2) {
            res.status(200).json(data1);
        } else {
            res.status(200).json(data2);
        }
    }
}