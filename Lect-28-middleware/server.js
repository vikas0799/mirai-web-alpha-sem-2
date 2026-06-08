const express=require("express");
const app=express();
const port=3000;
const fs=require("fs");
// let i=0;

// app.use("/public",express.static("public"));
// app.use("/assets",express.static("assets"));


app.use((req,res,next)=>{
//     i++;
//     const timestamp=new Date();
//     // console.log(timestamp);
//     const data=` clinet data=${i}, ${req.url}, ${req.ip} ${timestamp} , ${req.ip} \n`;
//    fs.appendFileSync("log.txt",data,"utf-8");
next();
})

app.get("/",(req,res)=>{
    res.send("home page....")
})

app.post("/register",(req,res)=>{
    res.send("user registration completed..")
})








app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
    
})