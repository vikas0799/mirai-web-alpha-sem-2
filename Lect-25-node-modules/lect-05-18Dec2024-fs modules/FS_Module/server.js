const http = require("http");
const fs = require("fs");
const { students } = require("./students.js");
// console.log(students);

const server = http.createServer((req, res) => {

    if (req.method == "GET") {
        // let data="vikas patel";
        // let data=true;
        console.log(req);
        // console.log(res);
        console.log("wait.. we are working on your request");

        console.log(typeof (students));

        let data = JSON.stringify(students);
        console.log(data);
        res.write(data);
        res.write("hiii");
        res.end("data send successfully");
        //   res.end("by")
    }
    if (req.method == "POST") {
        res.end("data saved successfuly");
    }
})

server.listen(4000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("server is running at 4000");

})
