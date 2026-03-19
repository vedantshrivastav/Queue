import express from 'express'
import { connectDB } from './config/db'
const app = express()
const PORT = 3000

async function startServer(){
    try{
        await connectDB()
        app.listen(PORT,() => {
            console.log(`server running on port ${PORT}`)
        })
    }
    catch(e){
        console.log('Error starting server',e)
    }
}
startServer()