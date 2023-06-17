const fs = require('fs');
const http = require('http');

const data = fs.readFileSync(`${__dirname}/api.json`,"utf-8")
const jsonData = JSON.parse(data);

const server = http.createServer((req,resp)=>{

    resp.writeHead(200 , {"Content-type": "application/json"});
    resp.end(jsonData[1].last_name);
})

server.listen( 8000 , ()=>{
    console.log("server created and runs on port 8000");
});
