import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({

    movieData :{type:String},
    movieName :{type:String},
    ProducerName :{type:String},
    DirectorName:{type:String},
    accterName:{type:String},
    acctressName:{type:String},
    MovieType:{type:String},
    movieLanguage:{type:String},
    status:{type:String,default:"Active"},
    RealingDate:{type:String},
    createdBy:{type:String,default:"Admin"},
    updatedBy:{type:String},

},{timestamps:true})





const movieDataModel = mongoose.model("movieData",movieSchema)


export default movieDataModel;