import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function createTicket(data) {
    try {
        await connectDB();
        const ticket = new Ticket(data);
        await ticket.save();
        return true;
    } catch (e) {
        console.log(e);
        throw new Error("Failed");
    }
}