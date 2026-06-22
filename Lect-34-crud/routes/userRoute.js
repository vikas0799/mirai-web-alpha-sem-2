const express=require("express");
const route=express.Router();

const userController=require("../controllers/userController")


console.log("hii i am in user routes");


route.get("/user/home",userController.home);
// route.get("/user/payment",userController.payment);


module.exports=route;




