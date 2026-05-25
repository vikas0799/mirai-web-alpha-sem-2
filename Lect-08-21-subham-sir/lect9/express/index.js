const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;

// middlewares
// app.use("/",(req,res)=>{
//   console.log("middleware");
//   // req will get stuck as we haven't send it to next function/middleware
// })

// this will run for every api req
app.use((req,res,next)=>{
  console.log("middleware");
  next()    // it's passes the req to next middleware
})

// this will run for every api whose path starts with -> "/"
app.use("/",(req,res,next)=>{
  console.log("middleware");
  next()    // it's passes the req to next middleware
})

// req (type/method , url/path)
// home route -> "/"
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