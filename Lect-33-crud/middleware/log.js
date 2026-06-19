const log=(req,res,next)=>{
    console.log("global moddleware 1");
    next();
    
}

module.exports=log;