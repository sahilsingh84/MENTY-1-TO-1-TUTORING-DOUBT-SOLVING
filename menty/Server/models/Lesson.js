const mongoose=require("mongoose")
const lessonSchema=new mongoose.Schema({
   lessonName:{
    type:String,
    trim:true,
    required:true,
   },
   description:{
    type:String,
    trim:true,
    required:true,
   },
   videoFile:{
    type:String,
   }
});
exports.module=mongoose.model("Lesson",lessonSchema);