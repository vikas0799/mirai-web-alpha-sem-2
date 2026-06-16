const express=require("express");
const mongoose =require("mongoose");
// console.log(mongoose);

const app=express();



mongoose.connect("mongodb+srv://vikas56:vikas123@cluster0.it2bd.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("database conection alive..");
    
})
.catch()




app.get("/",(req,res)=>{
    console.log(req.param);
    res.json({
        "name":"vikas patel",
        "college":"kanpur university"
    })
})



app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})