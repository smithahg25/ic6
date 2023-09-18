const express = require("express");
const mongoose=require("mongoose");
const route=require("./routes/route");

const app=express();

//DB connection
mongoose
      .connect('mongodb://127.0.0.1:27017/cybersecurity').then(()=>{
      console.log("MongoDb is successfully connected")
    })
    .catch((err)=>{
    console.log(err)
     });


app.listen(3500,()=>{
    console.log("server is successfully connected at port 3500");
});
