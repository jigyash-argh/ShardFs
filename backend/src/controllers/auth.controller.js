import userModel from "../models/user.model.js"
import crypto from 'crypto'
async function register(req,res){
    const {username,email,password}=req.body
    const isAlreadyRegistered= await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(isAlreadyRegistered){
        req.status(400).json({
            message:"username or email already exists"
        })
    }
    const HashedPassword=crypto.createHash("sha256").update(password).digest("hex");
}