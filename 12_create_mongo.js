// var MongoClient = require('mongodb').MongoClient;

// var url = "mongodb://localhost:27017/db1";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("db1");
dbo.createCollection("customers", function(err, res) {
if (err) throw err;
console.log("Collection created!");
db.close();
});
});