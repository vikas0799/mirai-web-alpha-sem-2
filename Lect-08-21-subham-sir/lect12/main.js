const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;

app.get("/",(req,res)=>{
  res.status(200).json({
    message:"everything went well",
    data:{name:"shubham"}
  })
})

app.get("/info",(req,res)=>{
  try {
    let num = Math.random()*10
    if(num <5){
      throw new Error("number is less than 5 so i generated error")
    }
    res.status(200).json({message:"work done",data:{number:num}})
  } catch (error) {
    console.log(error);
    res.status(400).json({message:error.message})
  }
})

// start server , port -> mapping of process in system
app.listen(PORT,()=>{
  console.log("server is started at" ,`http://localhost:${PORT}`);
})