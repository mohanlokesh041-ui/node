import express from 'express'
import { get } from 'mongoose'
import { added, deletedata, getByID, updatedata } from '../controllers/departmentController.js'

const route = express.Router()

route.post("/add",added)
route.get("/get",get)
route.get("/getbyId/:userid",getByID)
route.put("/updateData/:userid",updatedata)
route.delete("/deleteData/:userid",deletedata)

export default route;

// http://localhost:5000/api/department/add
// // http://localhost:5000/api/department/get

//  http://localhost:5000/api/department/deleteData/