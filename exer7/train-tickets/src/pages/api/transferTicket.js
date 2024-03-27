import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method == 'PATCH') {
        try {
            await updateTicketByUser(req.body);
            return res.status(200).send("Success")
        } catch (e) {
            if (e.name === "UserNotFoundError" || e.name === "TicketNotFoundError") {
                return res.status(400).send(e.message)
            }
            return res.status(500).send(e.message)
        }
    }
}