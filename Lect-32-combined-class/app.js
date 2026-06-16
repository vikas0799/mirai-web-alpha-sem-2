const express=require("express");
const mongoose = require("mongoose");
const app=express();

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
.then(()=>{
    console.log("mongoDB local wala connected..");
    
})
.catch(()=>{
    console.log("error a gya bhai thik connect kar le");
    
})


//schema of students
const studentSchema=new mongoose.Schema({
    // name:"String",
    // age:Number,
    // course:"String"
    name:{
        type:"String",
        minlength:3,
        required:true
    },
    age:{
        type:"Number",
        min:18,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


//model 
const Student=mongoose.model("Student",studentSchema);





app.get("/",async (req,res)=>{
//async task. await ...
        let allstudent= await Student.find();  //async task
        console.log(allstudent);

        allstudent = allstudent.filter((x)=>{
            return x.age>30
        })
        
    let obj={
        "name":"parth",
        age:20
    };


    // res.send("home page");
    // res.send(obj);
    // res.send(allstudent)
    res.render("students.ejs",{allstudent})
})


app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})


app.post("/createdata",async (req,res)=>{
   try {
    

     console.log(req.body);
          
        let data=   await Student.create(req.body);  //db cretation
        console.log(data);
        
    res.send("data daved succesfully");
   } catch (error) {
      res.status(500).send("something went wrong..")
   }
})


app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})