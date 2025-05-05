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

    role : String,

    position: {
        type: String,
        enum: ["Admin", "Manager", "Member"],
        default : "Member"
    },
}, {timestamps : true});

export const Member = mongoose.Model("Member", memberSchema);