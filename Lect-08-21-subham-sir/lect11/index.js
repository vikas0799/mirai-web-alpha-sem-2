const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;

// query params
app.get("/search",(req,res)=>{
  const query = req.query;
  console.log(query);
  res.send("query received",query)
})

app.get("/user/:id/data",(req,res)=>{
  const params = req.params;
  console.log(params);
  res.send("params received",params);
})
// its a middleware to convert the encripted data in body back to json
app.use(express.json())

app.post("/user/create",(req,res)=>{
  const body = req.body;
  console.log(body);
  // res.json("body received",body)  wrong -> json is always object
  res.json({message:"body received",data:body})
  // res.send("body received",body);
})

// start server , port -> mapping of process in system
app.listen(PORT,()=>{
  console.log("server is started at" ,`http://localhost:${PORT}`);
})