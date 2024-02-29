const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Student","Instructor"]
    },
    image:{
        type:String,
    },
    profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    ratingAndReview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
    ],
    fibt:{
        type:String
    }

})

exports.module=mongoose.model("User",userSchema);