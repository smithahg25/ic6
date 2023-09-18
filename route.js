const express=require("express");
const router=express.Router();

const StudentController=require("../controllers/studentController");

router.post("/students",StudentController.createStudent);

module.exports=router;
