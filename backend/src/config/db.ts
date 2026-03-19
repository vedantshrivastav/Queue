import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const MONGO_URL = process.env.MONGO_URL

export async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL!)
        console.log('MongoDB connected')
    }
    catch(e){
        console.log("Error connecting to DB",e)
    }
}