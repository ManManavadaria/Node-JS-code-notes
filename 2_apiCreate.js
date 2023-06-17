var http = require('http');

var data = [
    {'name':'man','email':'man@gmai.com','ph':'5341321051'},
    {'name':'skvnjr','email':'kh@skvn.com','ph':'4865664'},
    {'name':'maksrvvn','email':'shbv@gmai.com','ph':'645+526'}
]

http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);