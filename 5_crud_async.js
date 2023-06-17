const { Console } = require('console');
const fs = require('fs');


// fs.writeFile('async.txt',"this file is created from async fs",(err)=>{
//     console.log("task completed");
// });

fs.rename('async.txt','async1.txt',(err)=>{
    console.log("file renamed");
})

// fs.appendFile('async.txt',"apeend this text",(err)=>{
//     console.log("appended");
// })

// fs.readFile('async.txt','utf-8',(err,data)=>{
//     console.log(data);
// });

// fs.unlink('async.txt',(err)=>{
//     console.log("deleted");
// })