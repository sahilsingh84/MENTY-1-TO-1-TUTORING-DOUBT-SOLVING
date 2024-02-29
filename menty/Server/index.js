const express=require('express');
const http=require('http');
const cors=require('cors');
const app=express();
require('dotenv').config();
const server=http.createServer(app);
const {Server}=require('socket.io');
const io=new Server(server,{
    cors:{
        origin:`http://localhost:${process.env.FRONTEND_PORT}`,
        credentials:true,
    }
});
app.use(cors({
    origin:`http://localhost:${process.env.FRONTEND_PORT}`,
    credentials:true,
}))
app.get("/",(req,res)=>{
    return res.send("Welcome to my backend Page");
});
server.listen(process.env.BACKEND_PORT,()=>{
    console.log(`Server is running successfully:${process.env.BACKEND_PORT}`);
})
