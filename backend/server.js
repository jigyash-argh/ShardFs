import app from "./src/app.js"
import connectDB from "./src/config/database.js"
connectDB();
app.get("/",(req,res)=>{
    res.json({
        message:"ShardFS server is running "
    })
})
app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})