import Redis from "ioredis";
import jwt from "jsonwebtoken";
import { UserModel } from "../../config/models";

const redisClient = new Redis()

export const sendOTP = async(phoneNumber : string) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redisClient.set(phoneNumber,otp,"EX",300)
    console.log(`OTP for ${phoneNumber} is ${otp}`)
}

export const verifyOTP = async(phoneNumber : string,otp : string,name : string) => {
    const storedOTP = await redisClient.get(phoneNumber)
    if (!storedOTP || storedOTP !== otp) {
    throw new Error("Invalid OTP");
  }
   await redisClient.del(phoneNumber)
   //check user
   let user = await UserModel.findOne({PhoneNumber : phoneNumber})
   if(!user){
        user = await UserModel.create({
        name,
        PhoneNumber : phoneNumber,
        role : "User"
     })
   }
   //generate token
   const token = jwt.sign({userId : user._id,role : user.role},process.env.JWT_SECRET as string,{expiresIn : "7d"})
   return {token : token,user : user.role}
}