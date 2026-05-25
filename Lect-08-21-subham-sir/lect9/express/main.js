const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;

app.use("/user",(req,res,next)=>{
  console.log("user middleware");
  next();
})

app.get("/user/profile",(req,res)=>{
  res.send("user data")
})

app.put("/user/id/update",(req,res)=>{
  res.send("user updated")
})

app.delete("/user/id/delete",(req,res)=>{
  res.send("user deleted")
})

// req -> client information , res -> send response to user
app.get("/",(req,res)=>{
  console.log("hello");
  res.send("hello , the server is live and method is get")
})

app.get("/second",(req,res)=>{
  // console.log("hello");
  res.send("hello , this is second and method is get")
})

app.post("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is post")
})

app.put("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is put")
})

app.patch("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is patch")
})


app.patch("/second/update/mydata",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is patch")
})

app.delete("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is delete")
})

// start server , port -> mapping of process in system
app.listen(PORT,()=>{
  console.log("server is started at" ,`http://localhost:${PORT}`);
})