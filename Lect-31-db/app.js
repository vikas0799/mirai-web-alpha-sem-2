const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    //
    //
    console.log(req.param);
    
    res.json({
        "name":"vikas patel",
        "college":"kanpur university"
    })
})





app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    console.log(req.params.roll);
    
    //db ke ander jakr resukt ko khojna parega..
    //........
    // res.send("fail h bhai...")
    res.send(`fail ho gya ${req.params.roll}`);
    
})


// http://localhost:3000/search?name=%22vikas%22&address=%22azamgarh%22
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("data found in db");
    
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})