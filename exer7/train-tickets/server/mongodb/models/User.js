import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    age: Number
});

export default mongoose.models?.User || mongoose.model("User", userSchema);