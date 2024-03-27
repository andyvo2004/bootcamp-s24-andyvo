import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    lineColor: {
        type: String,
        required: true
    },
    station: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema);