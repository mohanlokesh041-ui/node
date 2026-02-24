import express from 'express'
import { createData, getByID, getData } from '../controllers/movieController.js'


const movieRoute = express.Router()




movieRoute.post('/create',createData)
movieRoute.get('/get/',getData)
movieRoute.get('/getid/:userid',getByID)


export default movieRoute;



// Insert Api - http://localhost:5000/api/movie/create
// get Api    - http://localhost:5000/api/movie/get
// get By Id  - http://localhost:5000/api/movie/getid/6997ef236a3f8db110fc0400