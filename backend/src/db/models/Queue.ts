import mongoose from "mongoose";

const QueueModel = new mongoose.Schema({
    business  : {type : mongoose.Schema.Types.ObjectId,required : true},
    customers : [
        {
            user : {type : mongoose.Schema.Types.ObjectId,required : true},
            joinedAt : {type : Date,default : Date.now},
            status : {type : String,enum : ["Waiting","Served","skipped"],default : "Waiting"},
        }
    ],
    isActive : {type : Boolean,required : true}
})

export default mongoose.model("Queue",QueueModel)