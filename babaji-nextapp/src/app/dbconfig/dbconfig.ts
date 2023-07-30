import { error } from "console";
import mongoose, { connection } from "mongoose";
import { connected } from "process";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Mongodb connect successfully");
        })

        connection.on('error',(err)=>{
            console.log("MongoDB connection error.please make sure MongoDB is running."+error);
        })

    }
    catch(error){
        console.log("someting went wrong")
        console.log(error)
    }
}