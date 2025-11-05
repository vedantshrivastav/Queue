import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema(
    {
        owner : {type : mongoose.Schema.Types.ObjectId,ref : "User",required : true},
        name : {type : String,required : true},
        address : {type : String,required : true},
        location : {
            type : {type : String,enum : ["Point"],default : "Point"},
            coordinates : {type : [Number],required : true}
        },
        services : [{type : mongoose.Schema.Types.ObjectId, ref : "Service"}],
        isQueueActive : {type : Boolean,required : true}
    }
)

BusinessSchema.index({location : "2dsphere"})

export default mongoose.model("Business",BusinessSchema)