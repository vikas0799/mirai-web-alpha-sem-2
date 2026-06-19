const express=require("express");
const app=express();
const log=require("./middleware/log.js")
const gold=require("./middleware/gold.js")
const connectDB=require("./config/db.js");
const gigRouter=require("./routes/gigRouter.js")

const port=3000;
connectDB();

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(log);
app.use("/gold",gold);
app.use("/",gigRouter);



app.listen(port,()=>{
    console.log("server is running at 3000 port");
    
})