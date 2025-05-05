import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
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

    title : {
        type : String,
        required : true
    },

    desc : String,
}, {timestamps : true});

export const Issue = new mongoose.Model("Issue", issueSchema);