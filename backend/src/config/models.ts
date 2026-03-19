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
export const BusinessModel =  mongoose.model("Business",BusinessSchema)

const UserSchema = new mongoose.Schema({
    name : {type : String,required : true},
    PhoneNumber : {type:Number,required : true},
    role : {type : String,enum : ["User","BusinessOwner"],default : "User"}
})

export const UserModel = mongoose.model("User",UserSchema)

const ServiceSchema = new mongoose.Schema(
    {
        business : {type : mongoose.Schema.Types.ObjectId,required : true},
        name : {type : String,required : true},
        estimatedTime : {type : Number,default : 15}
    }
)

export const ServiceModel = mongoose.model("Service",ServiceSchema)

const QueueSchema = new mongoose.Schema({
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

export const QueueModel = mongoose.model("Queue",QueueSchema)