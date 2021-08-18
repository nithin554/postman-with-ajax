var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.get("/", function (request, response){
    response.sendFile(__dirname+"/postman.html");
});
app.listen(5000);
console.log("Something awesome to happen at http://localhost:5000");