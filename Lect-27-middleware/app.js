const express = require("express");
const app = express();

app.use((req,res,next)=>{
   let out=`url=${req.url} and address is ${req.ip}`;
   console.log(out);
   next();
   
    
})

app.use((req, res, next) => {
    console.log("middleware 1 responsible for mobile auth");
    //authentication 
    let auth = true;
    if (!auth) {
        res.send(" mobile auth failed .. try again")

    }
    else {
        next();
    }
})

app.use((req, res, next) => {
    console.log("middleware 2 responsible for email auth");
    //authentication 
    let auth = true;
    if (!auth) {
        res.send("email auth failed .. try again")

    }
    else {
        next();
    }
})



app.get("/", (req, res) => {
    res.send("home page...")
})

app.post("/detailes",(req,res)=>{
    console.log("details wala route");
    console.log(req.body);

    res.send("data saved ......")
    
    
})

app.get("/about", (req, res) => {
    res.send("about page...")
})

app.use((req,res,next)=>{
    res.send("404 not found")
})



app.listen(3000, () => {
    console.log(`server is running at 3000`);

})