import mongoose from "mongoose";

const ListSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    type : {
        type : String,
    },
    genre : {
        type : String,
    },
    content : {
        type : Array
    }
},{timestamp : true})

export default mongoose.model("Users",ListSchema);