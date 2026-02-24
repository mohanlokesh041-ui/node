import mongoose from "mongoose";

const connectDB = async ()=>{

    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URL)

        // console.log(conn);
        

        console.log(`Database Connected Successfully ${conn.connection.host}`);

        // console.log(`Database Connected Successfully`);

        
        

    } catch (error) {
        

        console.log(`Something error`,error);
        
    }
}

export default connectDB