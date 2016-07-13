var express = require("express");

var app = express();

app.get("/",function(req,res){
	res.send("Hello World");
});

app.listen(8023,function(){
	console.log("Demo App listening to port 8023");
});