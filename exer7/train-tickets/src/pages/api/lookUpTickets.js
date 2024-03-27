import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const result = await readTicketsByUser(req.query);
            return res.status(200).send(result);
        } catch (e) {
            if (e.name === "UserNotFoundError") {
                return res.status(400).send(e.message)
            }
            return res.status(500).send(e.message)
        }
    }
}