import mongoose from "mongoose";


const departmentSchema = new mongoose.Schema({
district_name : String,
departments_name : String,
subcatagory: String,
members_count : Number,
department_code:Number,
status:{type:String,default:"Active"},
created_by:{type:String,default:"Admin"},
updated_by:{type:String,default:"User"}
},{timestamps:true})


const departmentModel = mongoose.model("departdata",departmentSchema)

export default departmentModel