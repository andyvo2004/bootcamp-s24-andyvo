import connectDB from "..";
import Ticket from "../models/Ticket";
import User from "../models/User";

export default async function readTicketsByUser(data) {
    try {
        await connectDB();
        const { userId } = data;
        if (!userId) {
            throw new Error();
        }
        let checkUser = await User.findById(userId);
        if (!checkUser) {
            const e = new Error("User Not Found");
            e.name = "UserNotFoundError";
            throw e;
        }
        let res = await Ticket.find({ userId: userId });
        return res;
    } catch (e) {
        console.log(e);
        if (e.name === "UserNotFoundError") {
            throw e;
        }
        throw new Error("Failed");
    }
}