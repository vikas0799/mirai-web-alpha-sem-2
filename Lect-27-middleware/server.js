const express = require("express");
const app = express();
const fs=require("fs");

// const data=require("./data.json");
// console.log(data);
// console.log(typeof(data));


let data=fs.readFileSync("data.txt","utf-8");
console.log(data);
data=JSON.parse(data);

app.use((req, res, next) => {
    console.log(`${req.url} running middle 1, ${req.ip}`);

    next();

})

app.get("/", (req, res) => {
    // res.send({
    //     "name": "dipesh singh",
    //     age: 40
    // })
    res.send(data);
})

app.listen(3000,()=>{
    console.log("server is runnjing at 3000");
    
})