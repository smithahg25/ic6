const StudentModel=require("../models/studentModel");

const createStudent=async(req,res)=>{
    try{
        const data=req.body
        let studentCreated=await StudentModel.create(data);
        returnres.status(201).send({
            status:true,
            msg:"Student Data Successfully Created",
            data:studentCreated,
        });
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message});
    }
};

module.exports={createStudent};
