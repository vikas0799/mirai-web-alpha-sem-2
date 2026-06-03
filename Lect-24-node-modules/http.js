const http=require("http");
// console.log(http);

let server=http.createServer((req,res)=>{
    console.log("hi inside server..computer ");

    res.end("mirai page sent");
    
});


server.listen(3000);

