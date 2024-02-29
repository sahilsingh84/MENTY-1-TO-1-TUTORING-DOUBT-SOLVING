const mongoose=require("mongoose")
const courseSchema=new mongoose.Schema({
   instructorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Instructor",
   },
   title:{
    type:"String",
    trim:true,
    required:true,
   },
   description:{
    type:"String",
    trim:true,
    required:true,
   },
   category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
   },
   lesson:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Lesson",
   }],
})
exports.module=mongoose.model("Course",courseSchema);