import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

dotenv.config()

app.use(cors())

app.use(express.json())

app.use("/api/request",reqestRoute)


// http://localhost:5000/api/request 

const PORT =process.env.PORT || 3000


app.listen(PORT,()=>{

    console.log(`Server Succesfully Done http://localhost:${PORT}`);
    

})
