const mongoose=require("mongoose");
const {mailSender} =require("../utils/mailSender");
const otpSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    trim:true,
  },
  otp:{
    type:Number,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now(),
    expires:10*60,
  }
});

async function tosendEmail(email,otp){
    try{
        const mailresponse=await mailSender(email,otp,"Otp to confirm your emial");
        console.log(mailresponse);
    }catch(err){
        console.log("Error in sending an Email",err);
        throw(err);
    }
}
//pre middleware to send otp before creating any entry
otpSchema.pre("save",async function(next){
    await tosendEmail(this.email,this.otp);
    next();
})
const Otp=mongoose.model("Otp",otpSchema);
module.exports=Otp;