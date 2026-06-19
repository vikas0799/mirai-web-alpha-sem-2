const express=require("express");
const route=express.Router();
const gigController=require("../controllers/gitController")

route.get("/",gigController.orderTrack);
route.get("/assignOrder",gigController.assignOrder);



module.exports=route;
