import { useEffect, useState } from "react";
import api from "../api/axios";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoute(){
    const [loading, setloading] = useState(true)
    const [isAuthenticated, setisAuthenticated] = useState(false)
    useEffect(() => {
      const checkAuth=async()=>{
        const token=localStorage.getItem("token")
        if(!token){
            setloading(false)
            return
        }
        try {
            await api.get("/getMe",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setisAuthenticated(true)
        } catch {
            localStorage.removeItem("token")
        }finally{
            setloading(false)
        }
      }
      checkAuth()
    },[])
    if (loading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
    
