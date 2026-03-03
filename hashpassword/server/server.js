import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/hashed")


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

    console.log(`Server Connected Succesfully Done http://localhost:${PORT}`);
    
})