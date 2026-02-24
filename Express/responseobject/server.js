import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ResponseRoute from './routes/ResponseRoutes.js'

dotenv.config()

const mainapp = express()

mainapp.use(cors())


mainapp.use(express.json())

mainapp.use("/api/response",ResponseRoute)


const PORT = process.env.PORT  || 3000


mainapp.listen(PORT,()=>{

    console.log(`Server Connected Via http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/response