import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    name : {type : String,required : true},
    PhoneNumber : {type:Number,required : true},
    role : {type : String,enum : ["User","Business"],default : "User"}
})

export default mongoose.model("User",UserModel)