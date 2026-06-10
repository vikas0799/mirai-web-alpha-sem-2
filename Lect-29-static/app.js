// setup express
//public folder serve karna h index.html(form)
//post route bnana h /register par data ayega 
//req.body ->append karna h data.json ke ander
const express = require("express");
const app = express();
const fs = require("fs");
// const data=require("./data.json");
const port = 3000;
let d=fs.readFileSync("data.json", "utf-8");
  d=JSON.parse(d);
console.log(d);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("home page route....")
})


app.post("/register", (req, res) => {
    // console.log(req.body);
    // console.log(req.ip);
    // let log = req.body;
    // fs.appendFileSync("data.json", JSON.stringify(log) + "\n", "utf-8");
    // res.send("registration completed");

})

app.get("/mirai", (req, res) => {
    res.send("jhdsu");
})



app.listen(port, () => {
    console.log(`server is running at ${port}`);

})