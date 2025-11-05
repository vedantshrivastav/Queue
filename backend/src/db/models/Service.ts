import mongoose from "mongoose";

const ServiceModel = new mongoose.Schema(
    {
        business : {type : mongoose.Schema.Types.ObjectId,required : true},
        name : {type : String,required : true},
        estimatedTime : {type : Number,default : 15}
    }
)

export default mongoose.model("Service",ServiceModel)