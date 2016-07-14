var express = require("express");

var app = express();

app.use(express.static("pages"));
app.use(express.static("js"));
app.use(express.static("Bootstrapv3.0.2"));

app.use("/static",express.static("pages"));
app.use("/static/js",express.static("js"));
app.use("/static/bootstrap",express.static("Bootstrapv3.0.2"));

app.get("/",function(req,res){
	res.send("Hello World");
});

app.listen(8023,function(){
	console.log("Demo App listening to port 8023");
});