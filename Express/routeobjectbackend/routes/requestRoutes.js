import express from 'express'
import { adddata, getdatabynumber, getdataByQuery, getdataByheaders } from '../controller/requestController.js'

//http://localhost:5000/api/request/createdata
//http://localhost:5000/api/request/getdatabyNumber/10000
//http://localhost:5000/api/request/getdatabyquery
//http://localhost:5000/api/request/headers


const reqestRoute = express.Router()

reqestRoute.post("/createdata",adddata)
reqestRoute.get("/getdatabyNumber/:useridbynumber",getdatabynumber)
reqestRoute.get("/getdatabyquery",getdataByQuery)
reqestRoute.get("/headers",getdataByheaders)

export default reqestRoute