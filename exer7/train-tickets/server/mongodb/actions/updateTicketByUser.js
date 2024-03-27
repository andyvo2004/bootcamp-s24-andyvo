import connectDB from "..";
import Ticket from "../models/Ticket";
import User from "../models/User";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketId, userId } = data;
        if (!ticketId || !userId) {
            throw new Error();
        }
        let checkUser = await User.findById(userId);
        if (!checkUser) {
            const e = new Error("User Not Found");
            e.name = "UserNotFoundError";
            throw e;
        }
        let checkTicket = await Ticket.findById(ticketId);
        if (!checkTicket) {
            const e = new Error("Ticket Not Found");
            e.name = "TicketNotFoundError";
            throw e;
        }
        await Ticket.findByIdAndUpdate( ticketId, { userId: userId });
        return true;
    } catch (e) {
        console.log(e)
        if (e.name === "UserNotFoundError" || e.name === "TicketNotFoundError") {
            throw e;
        }
        throw new Error("Failed")
    }
}