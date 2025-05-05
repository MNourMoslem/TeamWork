import mongoose from "mongoose";

const commentShcema = new mongoose.Schema({
    owenr : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Member",
    },

    task : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Task"
    },

    text : {
        type : String,
        required : true
    },

    Files : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "File"
    }],
    
}, {timestamps : true});

export const Comment = new mongoose.Model("Comment", commentShcema);