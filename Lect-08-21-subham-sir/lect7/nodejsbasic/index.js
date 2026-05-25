const fs = require("fs");

fs.writeFile("./first.txt","my second write operation","utf-8",(err)=>{
  console.log(err);
})

fs.readFile("./first.txt","utf-8",(err,data)=>{
  console.log(data);
})

// synchronous write
console.log("sync operation");
fs.writeFileSync("./first.txt","my third write operation","utf-8");

// synchronous read
const data = fs.readFileSync("./first.txt","utf-8");
console.log(data);

// to add data in file
fs.appendFile("./first.txt","\nthis is appended text","utf-8",(err)=>{
  console.log(err);
})
// to delete file after use
fs.unlink("./first.txt",(err)=>{
  console.log(err);
})

fs.writeFile("alpha/lect7/nodejsbasic/myfile.txt","this is test","utf-8",(err)=>{
  console.log(err);
})

fs.mkdir("alpha/lect7/nodejsbasic/mydir",(err)=>{
  console.log(err);
})