const express=require('express');
const http=require('http');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const {dbConnect}=require("./config/database");
const {cloudinaryConnect}=require("./config/cloudinary");
const app=express();
require('dotenv').config();
// const server=http.createServer(app);
// const {Server}=require('socket.io');
const authRoute=require("./routes/authRoute");
const profileRoute=require("./routes/profileRoute");
const courseRoute=require("./routes/courseRoute");
const myRoutes=require("./routes/myroutes");
const fileUpload=require("express-fileupload");
// const io=new Server(server,{
//     cors:{
//         origin:`http://localhost:${process.env.FRONTEND_PORT}`,
//         credentials:true,
//     }
// });
console.log(process.env.FRONTEND_PORT);
app.use(cors({
    origin:`http://localhost:3000`,
    credentials:true,
}))


// ====================


// ============
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(fileUpload(
    {useTempFiles:true,
    tempFileDir:'/tmp/'} 
    ));
dbConnect();
cloudinaryConnect();
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/profile",profileRoute);
app.use("/api/v1/course",courseRoute);
app.use("/api/v1/doubt",myRoutes);
app.get("/",(req,res)=>{
    return res.send("Welcome to my backend Page");
});

// ========================
const server =app.listen(process.env.BACKEND_PORT,()=>{
    console.log(`Server is running successfully:${process.env.BACKEND_PORT}`);
})
const socketIO = require('./socketio'); // Import the socket.js file
socketIO.initSocket(server);








   