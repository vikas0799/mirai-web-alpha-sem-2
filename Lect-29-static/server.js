const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
// let data=require("./data.json");


let d=fs.readFileSync("data.json","utf-8");

// console.log(d);
console.log(typeof(typeof(d)));
d=JSON.parse(d);
console.log(typeof(d));





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("home page route....");
});



app.get("/data", (req, res) => {
    console.log(req.ip);
    
    console.log("data fetching..");
    console.log("");
    
    
    res.send(d);
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});