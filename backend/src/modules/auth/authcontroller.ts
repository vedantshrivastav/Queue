import * as authservice from './authservice'
import { Request, Response } from 'express'

export const sendOTP = async(req : Request,res : Response) => {
    try{
        const {phoneNumber} = req.body
        await authservice.sendOTP(phoneNumber)
        res.status(200).json({message : "OTP sent successfully"})
    }
    catch(e){
        res.status(500).json({message : "Error sending OTP"})
    }
}

export const verifyOTP = async(req : Request,res : Response) => {
    try{
        const {phoneNumber,otp,name} = req.body
        const {token,user} = await authservice.verifyOTP(phoneNumber,otp,name)
        res.status(200).json({token,user})
    }
    catch(e){
        res.status(500).json({message : "Error verifying OTP"})
    }
}