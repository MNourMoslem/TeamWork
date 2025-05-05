import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Project",
    },

    role: {
        type: String,
        enum: ["admin", "member"],
        required: true,
    },
});

export const Member = mongoose.Model("Member", memberSchema);