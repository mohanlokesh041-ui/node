import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import movieRoute from './routes/movieRoute.js'
import connectDB from './config/db.js'

dotenv.config()


connectDB()

const MovieApp = express()

MovieApp.use(cors())

MovieApp.use(express.json())

MovieApp.use("/api/movie/",movieRoute)


const PORT = process.env.PORT || 3000


MovieApp.listen(PORT,()=>{

    console.log(`Server Connected Succesfully http://localhost:${PORT}`);
    
})


// http://localhost:5000/api/movie