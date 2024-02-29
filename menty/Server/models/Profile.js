const mongoose=require("mongoose")

const profileSchema=new mongoose.Schema({
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
    },
    image:{
        type:String,
    },
    contactNumber:{
        type:String,
        trim:true
    },
    about:{
        type:String,
        trim:true
    }

})

exports.module=mongoose.model("Profile",profileSchema);