const express=require("express");
const mongoose = require("mongoose");
const app=express();

app.set("view engine","ejs");



mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
.then(()=>{
    console.log("mongoDB local wala connected..");
    
})
.catch(()=>{
    console.log("error a gya bhai thik connect kar le");
    
})


//schema of students
const studentSchema=new mongoose.Schema({
    name:"String",
    age:Number,
    course:"String"
})


//model 
const Student=mongoose.model("students",studentSchema);





app.get("/",async (req,res)=>{
//async task. await ...
        let allstudent= await Student.find();  //async task
        console.log(allstudent);
        
    let obj={
        "name":"parth",
        age:20
    };

    
    // res.send("home page");
    // res.send(obj);
    // res.send(allstudent)
    res.render("students.ejs",{allstudent})
})


app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})