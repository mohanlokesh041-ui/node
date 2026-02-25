import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js'
import department_Route from './routes/dapartment_Route.js'


dotenv.config()
connectDb()

const Dep_app = express()

Dep_app.use(cors())

Dep_app.use(express.json())

Dep_app.use("/api/department",department_Route)


const PORT = process.env.PORT || 4000

Dep_app.listen(PORT,()=>{

    console.log(`Server Connected Succesfully http://localhost:${PORT}`);
    
})