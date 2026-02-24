import express from 'express'
import { createresonce, getDataJson } from '../controllers/responseController.js'

// http://localhost:5000/api/response/create - Text Response using send()
// http://localhost:5000/api/response/getjsondata/1

const route = express.Router()

route.post("/create",createresonce)
route.get("/getjsondata/:userid",getDataJson)

export default route