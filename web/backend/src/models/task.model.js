import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },

    desc:{
        type: String,
        required: true,
    },

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
    }],

    priority: {
        type: String,
        enum: ["No Priority", "Urgent", "High", "Medium", "Low"],
        default: "No Priority"
    },
    
    files: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "File"
    }],

    issues : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Issue"
    }],

    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]

}, {timestamps : true});

export const Task = new mongoose.Model("Task", taskSchema);