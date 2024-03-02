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
const { Server } = require('socket.io');
const server =app.listen(process.env.BACKEND_PORT,()=>{
    console.log(`Server is running successfully:${process.env.BACKEND_PORT}`);
})








// ===============================

// const server = app.listen(port, (err) => {
//     if (!err) {
//     console.log("server started at ", port);
//     }
// });




const io = new Server(server,{
      cors:{ origin: "http://localhost:3000",
      credentials: true }
});

io.on('connection', (socket) => {
      console.log("user connected", socket.id);
      socket.emit('msg', { message:` you are Connected ${socket.id}` });
// room creatiion for doubt
      socket.on("join-room",(data)=>{
            // console.log("printing socket",socket);
      if (socket.room) {
      socket.leave(socket.room);
      console.log(`User ${socket.id} left room: ${socket.room}`);
      }
      socket.join(data);
      socket.room = data;
      console.log(`User ${socket.id} joined room: ${data}`);
})

// message for teacher
// 





      socket.on('clientMessage', async(data) => {
      console.log("Message from client:",data);
      const room=data.room;
      const user=data.user;
      const msg=data.message;
      const replyingto=data.replyingto;
      const replyingmsg=data.replyingmsg;



      const chatID=Date.now()+user;
      const chat={
            msgtype:data.msgtype,
            user:user,
            message:msg,
            room:room,
            replyingto:replyingto,
            replyingmsg:replyingmsg,
            chatID:chatID
      }
      const newmodel=new chatModel(chat);
      const respsonse=await newmodel.save();

      io.to(room).emit("message", chat);
    });


     socket.on('disconnect',()=>{
     console.log("socket id disconneted",socket.id);
    })
});
// ===============================