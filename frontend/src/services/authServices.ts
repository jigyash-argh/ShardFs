import api from "../api/axios"
export const registerUser=async(username:string,email:string,password:string)=>{
    const response=await api.post("/register",{
        username,email,password
    })
    return response.data;
}
export const loginUser=async(email:string,password:string)=>{
    const response=await api.post("/login",{
        email,password
    })  
    return response.data;
}