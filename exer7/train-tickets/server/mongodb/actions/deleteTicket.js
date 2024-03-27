import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function deleteTicket(data) {
    try {
        await connectDB();
        const { ticketId } = data;
        if (!ticketId) {
            throw new Error();
        }
        let res = await Ticket.findByIdAndDelete(ticketId);
        if (!res) {
            const e = new Error("Ticket Not Found");
            e.name = "TicketNotFoundError";
            throw e;
        }
        return true;
    } catch (e) {
        console.log(e);
        if (e.name === "TicketNotFoundError") {
            throw e;
        }
        throw new Error("Failed");
    }
}