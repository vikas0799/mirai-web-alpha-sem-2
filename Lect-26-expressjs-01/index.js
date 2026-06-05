let express=require("express")
// console.log(typeof(express));
let app=express();
let port=3000;
// console.log(app);
// console.log(typeof(app));



app.get(('/'),(req,res)=>{
    console.log("a user is on home page ..");
    console.log("hi mirai");
    console.log("hi mirai");
    console.log("hi mirai");
    console.log("hi mirai");
    console.log("hi mirai");
    console.log("hi mirai");

    
    res.send("data gaziabad sent hi tech");
    
})
app.get('/about',(req,res)=>{
    console.log("about page servise side ");
    res.send("about page")
    
})
// app.get("*",(req,res)=>{
//     res.send("get request me path galat h ");
// }) //use middleware
app.all("/about",(req,res)=>{
    console.log("bhai kha h tu..");
    res.send("pagl ho gya h kya bhai..404 error page")
    
})
app.all("/about",(req,res)=>{
    console.log("universal http and universal route");
    res.send("404 error page")
    
})

app.listen(port,()=>{
    console.log(`app is running on ${port}`);
    
});