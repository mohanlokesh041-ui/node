import mongoose from "mongoose";

const connectDb = async()=>{
    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connected Succesfully ${conn.connection.host}`);
        
        
    } catch (error) {

        console.log('Something error',error);
        
        
    }
}

export default connectDb;