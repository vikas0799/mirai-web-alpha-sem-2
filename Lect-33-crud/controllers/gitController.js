const gigModel=require("../models/gigModel.js");



const gigController={
    orderTrack:(req,res)=>{
        // res.send("order reaching in 5 minutes");
        res.render("gigHome");
    },
    assignOrder:(req,res)=>{
      res.send("an order has been assign");
    }
}


module.exports=gigController;