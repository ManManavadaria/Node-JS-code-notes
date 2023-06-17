const qs = require("querystring");
const url = require('url');

console.log(url.parse('name=Meet&hobbies=Game&hobbies=Travel&mobile='))

// console.log(qs.stringify({name:'Meet',hobbies:['Game','Travel'],mobile:''}));
let str = "I love India";
console.log(qs.escape(str));
let urlQ = "name=Meet&hobbies=Game&hobbies=Travel&mobile="
console.log("Parsed Query: ",qs.parse(urlQ));
let escapeQ = "I%20love%20India";
console.log("Unescaped Query: ",qs.unescape(escapeQ));