const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    USN:{
        type:String,
        unique:true,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
        required:true,
    },
    Mobile:{
        type:Number,
        unique:true,
        required:true,
    },
    Age:{
        type:Number,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
},
{timestamps:true}
);

module.exports=new mongoose.model("StudentModel",studentSchema);
