import * as authcontroller from './authcontroller';
import { Router } from 'express';
const router = Router()

router.post('/v1/auth/send-otp', authcontroller.sendOTP)
router.post('/verify-otp', authcontroller.verifyOTP)

export default router