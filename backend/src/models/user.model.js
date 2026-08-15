import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
            type:String,
            required:[true,"username is required"],
            uniques:[true,"username should be unique"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        uniques:[true,"email should be unique"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
})
const userModel =mongoose.model("users",userSchema)
export default userModel