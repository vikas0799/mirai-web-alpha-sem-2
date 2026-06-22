const express=require("express");
const app=express();
// const dotenv=require("dotenv");
// dotenv.config();
require("dotenv").config();
const PORT=process.env.PORT;
const userRoute=require("./routes/userRoute")
// app.use("/",userRoute);
const cookieParser=require("cookie-parser");
app.use(cookieParser());  //middleware for cookies parsing






app.get("/",(req,res)=>{
     res.cookie("username","john0799");

    res.send(" home page ....")
})


app.get("/payment",(req,res)=>{
    console.log(req.cookies);
    res.send("payment page ......");
    
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
    
})






