const http = require('http');
const url = require('url');


const server = http.createServer((req,res)=>{
    // res.end("this is it, boommm gyjeee");

    if(req.url == "/"){
        res.end("server is on home page");
    }
    else if(req.url == "/about"){
        res.end("server is on about page");
    }
    else if(req.url == "/contact"){
        res.end("server is on contact page");
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1><i>error</i></h1>");
    }
}
);

server.listen(5000 , ()=> {
    console.log("server lisend");
});