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

// ===============================================
// room createion


app.get("/hi",(req,resp)=>{
    resp.send({message:"gello"})
})
const chatModel=require("./models/Model");
const roomModel=require("./models/ModelCreateRoom");
const {uploadImageToCloudinary}=require("./utils/imageUploader");
app.get("/roomcreate/:roomname",async(req,resp)=>{
    const roomname=req.params.roomname;
    let data=await roomModel.find({room:roomname});
    if(data.length>0){
          return resp.send({status:false,
          message:"Same Room Name already exist"});
    }
    
    const roommodel=new roomModel({room:roomname});
    data=await roommodel.save();
    console.log(data);
    // resp.send(data);
    resp.send({status:true,
    message:"room created "});
    })
    app.get("/rooms",async(req,resp)=>{
    const roommodel=await roomModel.find({});
    resp.send(roommodel);
    })
    app.get('/getchat/:room',async(req,resp)=>{
          try {
                console.log("accessing chat of room ",req.params.room);
                const messages = await chatModel.find({room:req.params.room}); 
                const frontendData = messages.map(item => ({ ...item._doc, _id: item._id.toString() }));      
                resp.send(frontendData);
                } catch (error) {
                resp.status(500).send({ error: 'Internal Server Error' });
          }
    });

//     const storage=multer.diskStorage({
//         destination:(req,file,cb)=>{
//         cb(null,'Images');
//         },
//         filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))
//         }
//   });
//   const upload=multer({storage:storage});
  app.post("/upload",async(req,resp)=>{
    console.log("file uploading",req.files.image)
        const  file=req.files.image;
        const cdResponse= await uploadImageToCloudinary(file,"menty");
        const imageurl=cdResponse.secure_url;
        const replyingto=req.body.replyingto==="null"?null:req.body.replyingto;
        const replyingmsg=req.body.replyingmsg==="null"?null:req.body.replyingmsg;
        const chat={
              msgtype:req.body.msgtype,
              imagename:imageurl,
              user:req.body.user,
              message:req.body.message,
              room:req.body.room,
              replyingto:replyingto,
              replyingmsg:replyingmsg,
              chatID:Date.now()+req.body.user
        }
  
        const data= new chatModel(chat);
        data.save();
        // io.to(req.body.room).emit("message", chat);
        socketIO.emitMessage(req.body.room,chat);
        resp.send({message:"data send",status:true});
  })
// ===============================================








   