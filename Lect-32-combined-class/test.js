const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");



mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
// mongoose.connect("mongodb+srv://vikas56:vikas1234@cluster0.it2bd.mongodb.net/?appName=Cluster0")
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
    },
    ip:{
        type:String,
        require:true,
        unique:true
    }
})


//model 
const Student = mongoose.model("Student", studentSchema);


app.get("/",(req,res)=>{
    res.render("home.ejs");
})

// app.get("/test",async (req,res)=>{
//     //find()
//     //find({name:"khatri"})
//     //  let data= await Student.findOne({name:"rewas"});

//     // let data=await Student.updateMany({name:"khatri"},{name:"rewas"});
     
//     // let data=await Student.updateOne({name:"rewas"},{name:"parth sarthi ka dost"});
//     // let data=await Student.deleteMany({name:"rewas"});
//     // let data=await Student.deleteOne({name:"vikas"});
// //     let data= await Student.deleteMany(
// //     { age: { $gte: 18 } }
// // );

// let data=await Student.findByIdAndDelete("6a32812f7605c31c4e8c645b");
    
    
//     console.log(data);
//      res.send("bye..testing route..")
     
// })


app.get("/getdata", async (req, res) => {
try {
        //async task. await ...
    let allstudent = await Student.find();  //async task
    console.log(allstudent);

    // let obj = {
    //     "name": "parth",
    //     age: 20
    // };


    // res.send("home page");
    // res.send(obj);
    // res.send(allstudent)
    res.render("students.ejs", { allstudent })
} catch (error) {
    res.send(error);
}
})



app.get("/delete/:userid",async(req,res)=>{
   console.log(req.params.userid);
    let deldata= await Student.findByIdAndDelete(req.params.userid);
//
   res.redirect("/getdata");
// res.send("item deleted");
})

app.get("/edit/:userid",async(req,res)=>{
          let data=await Student.findById(req.params.userid);
    res.render("edit.ejs",{data});
})

app.post("/update/:userid",async(req,res)=>{
    let data=await Student.findByIdAndUpdate(req.params.userid,req.body,{new:true});
    res.redirect("/getdata");
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
    req.body.ip=req.ip;
    console.log(req.body);
    
    // let data =await  Student.create(obj);
    let data=await Student.create(req.body);

    console.log(data);
    
    res.redirect("/getdata");
    // res.send("data saved..")
})

app.listen(3000, () => {
    console.log("server is running at 3000");
})