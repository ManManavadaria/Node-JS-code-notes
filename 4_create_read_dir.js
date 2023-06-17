var fs = require('fs');
var path = require('path');
const dirpath = path.join(__dirname,'folder'); //current file pathe + folder
const filepath = `${dirpath}/hello.txt`; 
console.log(dirpath);


//create files in loop 
// for(var i=0 ; i<4 ; i++){
//     fs.writeFileSync(`${dirpath}/hello${i}.txt`,"this is a simple text file");
// }


// // read filenames in dir
// fs.readdir(dirpath,(err,files)=>{
//     files.forEach(element => {
//         console.log(element);
//     });
// })



// //read file content
// fs.readFile(filepath,'utf-8',(err,content)=>{
//     console.log(content);
// })


//appemd to file

fs.appendFile(filepath,"   and this is appended",(err)=>{
    if(!err) console.log("working");
});


//rename file
fs.rename(filepath,`${dirpath}/hello111.txt`,(err)=>{
    if(!err) console.log("working");
});

// delete file


