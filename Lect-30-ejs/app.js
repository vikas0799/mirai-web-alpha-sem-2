const express=require("express");
const app=express();


app.set("view engine", "ejs");


//file se read karke aya ya db read karke aya
let dipesh={
    name:"dipesh singh",
    roll:30,
    age:20
};

let color="red";
let flag=5;  

app.get("/",(req,res)=>{
    // res.send("home page...");
    // res.render("user",{dipesh,color});
    console.log(req.url);
    

    res.send("home pahge...")
})

app.get("/services",(req,res)=>{
    // res.send("home page...");
    // res.render("user",{dipesh,color});
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    
    
    // http://localhost:3000/services?name=%22dipesh%22

    res.send("services pahge...")
})




app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})