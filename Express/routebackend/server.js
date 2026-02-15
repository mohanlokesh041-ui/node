import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'


dotenv.config()


const app = express()


const PORT = process.env.PORT_NUMBER || 5000

app.use(cors())

app.use(express.json())

app.use("api/route",authRoutes)




app.listen(PORT,()=>{

    console.log(`Server Running Succesfully http://localhost:${PORT}`)
    
    })