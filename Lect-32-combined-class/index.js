const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");



// mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
mongoose.connect("mongodb+srv://vikas56:vikas1234@cluster0.it2bd.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("mongoDB local wala connected..");

    })
    .catch(() => {
        console.log("error a gya  thik connect kar le");

    })


//schema of students
const studentSchema = new mongoose.Schema({
    // name: "String",
    // age: Number,
    // course: "String"
    name:{
        type:String,
        required:true,
        minlength:3
    },
    age:{
        type:Number,
        min:18,
        required:false
    },
    email:{
        type:String,
        minlength:4,
        required:true
    }
})


//model 
const Student = mongoose.model("student", studentschema);





app.get("/", async (req, res) => {
    //async task. await ...
    let allstudent = await Student.find();  //async task
    console.log(allstudent);

    let obj = {
        "name": "parth",
        age: 20
    };


    // res.send("home page");
    // res.send(obj);
    // res.send(allstudent)
    res.render("students.ejs", { allstudent })
})

app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})

app.post("/createdata",async (req, res) => {
    let obj = {
        name: "aman",
        age: 20,
        "course": "webD"
    };
    console.log(req.body);
    
    // let data =await  Student.create(obj);
    let data=await Student.create(req.body);
    console.log(data);
    
    res.send("data saved..")
})

app.listen(3000, () => {
    console.log("server is running at 3000");
bhai
})