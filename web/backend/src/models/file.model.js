import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    link : {
        type : String,
        required : true,
    },

    filename : String
}, {timestamps : true});

export const File = new mongoose.Model("File", fileSchema);