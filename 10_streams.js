const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on("request",(req,resp)=>{
    const rstream = fs.createReadStream("api.json");
    
    // rstream.on("data",(chunk)=>{
        //     resp.end(chunk);
        // });
        // rstream.on("end",()=>{
            //     resp.end();
            // });
            // rstream.on("error",()=>{
                //     console.log("error");
                //     resp.end();
                // });
                
                rstream.pipe(resp);
            })

server.listen(8000);