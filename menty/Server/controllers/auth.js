const User=require("../models/User");
const Otp=require("../models/Otp");
const Profile=require("../models/Profile");
const otpGenerator=require('otp-generator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { mailSender}=require("../utils/mailSender")
require("dotenv").config();
//========================================================send otp
//function to validate email using regular expression

async function handelSendOtp(req,res){
    try{
        const {email}=req.body;
        console.log(email);
        //validating email where it is in correct regular expression form or not
        const userExist=await User.findOne({email});
        //if user exist than do this
        if(userExist){
            return res.status(409).json({
                success:false,
                message:"User already Registered"
            })
        }
        //generate otp
        const otp=Math.floor(Math.random() * 9000) + 1000;
        //creating the generated otp entry in database
        console.log(email,otp);
        const dbresponse=await Otp.create({otp:otp,email:email});
        return res.status(200).json({
            success:true,
            message:"Otp is generated successfulty",
            otp,
        })    
    }catch(err){
        console.log("Error in otp generation"); 
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
};
//=========================function to signup functionality
async function handelSignUp(req,res){
    try{
        const {firstName,lastName,email,password,role,otp}=req.body;
        if(!firstName||!lastName||!email||!password||!role||!otp){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }
        //checking whether already exists in database or not
        console.log(firstName,lastName,email,password,role,otp);
        const userExist=await User.find({email});
        console.log(userExist);
        if(userExist.length>0){
            return res.status(200).json({
                success:false,
                message:"User is already registered",
            })
        }
        //finding otp from database
        const otpDbResponse=await Otp.findOne({email}).sort({createdAt:-1}).limit(1);
        console.log(otpDbResponse);
        if(otpDbResponse.length==0){
            return res.status(404).json({
                success:false,
                message:"Otp not found",
            })
        }
        //cheking otp is correct or not
        else if(otpDbResponse.otp!=otp){
            return res.status(400).json({
                success:false,
                message:"Invalid Otp",
            })
        }
        //creating a profile for creating entry in User model
        // const profileDbResponse=await Profile.create({image:`http://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`});
        const profileDbResponse=await Profile.create({
            gender:null,
            dateOfBirth:null,
            contactNumber:null,
            about:null,
        })
        console.log("Profile Object is created",profileDbResponse);
        //hashing password
        const hashedPassword=await bcrypt.hash(password,10);
        //creating user in User model
        const user=await User.create({firstName,lastName,email,password:hashedPassword,role,profile:profileDbResponse._id,
        image:`http://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        fibt:null,
        });
        console.log("User object is created",user);
        return res.status(200).json({
            success:true,
            message:"User is registered successfully",
            user,
        });
     
    }catch(err){
        console.log("Error in singup",err);
        return res.status(500).json({
            success:false,
            message:err
        })
    }
}
//===========================login function
async function handelLogin(req,res){
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"All fileds are required",
            })
        }
        const userExist=await User.findOne({email}).populate("profile").exec();
        if(!userExist){
            return res.status(404).json({
                success:false,
                message:"User is not Regustered, First SignUp",
            })
        }
        console.log(userExist);
        if(await bcrypt.compare(password,userExist.password)){
            //creating a token
            const payload={
                email:userExist.email,
                id:userExist._id,
                role:userExist.role,
            };
            const token=jwt.sign(payload,process.env.JWT_SECRET_KEY);
            const user=userExist.toObject();
            user.token=token;
            user.password=null;
            //creating cookies
            const cookieOptions={
                expiresIn:new Date(Date.now()+1*24*60*60*100),
            }
            res.cookie("token",token,cookieOptions).status(200). json({
                success:true,
                message:"Login is Successful",
                user,
                token,
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Incorrect password"
            })
        }
    }catch(err){
        console.log("Error in Login");
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
// ==================change password functionality

module.exports={handelSendOtp,handelSignUp,handelLogin};