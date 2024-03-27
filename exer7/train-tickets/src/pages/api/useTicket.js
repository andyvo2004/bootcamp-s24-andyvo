import deleteTicket from "../../../server/mongodb/actions/deleteTicket";

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        try {
            await deleteTicket(req.query);
        } catch (e) {
            if (e.name === "TicketNotFoundError") {
                return res.status(400).send(e.message);
            }
            return res.status(500).send(e.message);
        }
        return res.status(200).send("Success");
    }
}