import express from 'express'
import { add,getData, login } from '../controllers/hashedController.js'


const route = express.Router()


route.post("/passwordhash",add)
route.get("/getdatanew",getData)

route.post("/logindata",login)


export default route;


// http://localhost:3000/api/hashed/passwordhash
// http://localhost:3000/api/hashed/getdatanew
// http://localhost:3000/api/hashed/logindata