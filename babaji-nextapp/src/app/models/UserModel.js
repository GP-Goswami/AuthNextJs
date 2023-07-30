import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
    type:string,
    required:[true,"Please provide a username"],
    unique:true,
    },

    email:{
        type:string,
        required:[true,"please provide email"],
        unique:true,
    },

    password:{
        type:string,
        required:[true,"please provide email"]
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,

})

const User = mongoose.models.users || mongoose.model
("users,username")

export default User;