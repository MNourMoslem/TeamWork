import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: string,
            required: true
        },
        shortDesc: {
            type: string,
            default: ""
        },
        longDesc: {
            type: string,
            default: ""
        },

        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Member" 
        }],

        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        }],

        status: {
            type: string,
            enum: ["Backlog", "Planned", "In Progress", "Completed", "Cancled"],
            default: "Backlog"
        },

        targetDate: {
            type: Date,
            require: false
        },
    }, {timestamps: true})


export const Project = mongoose.model("Project", projectSchema);