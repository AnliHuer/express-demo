var express = require("express");

var app  = express();

app.use('/', function(req,res){
    res.send({"message": "Hello!"});
});

app.listen(3000);