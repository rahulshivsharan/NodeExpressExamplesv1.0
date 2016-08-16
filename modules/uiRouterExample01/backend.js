var express = require("express");

var app = express();

app.use(express.static("pages"));
app.use(express.static("js"));
app.use(express.static("Bootstrapv3.0.2"));
app.use(express.static("modules"));


app.use("/static",express.static("pages"));
app.use("/static/js",express.static("js"));
app.use("/static/bootstrap",express.static("Bootstrapv3.0.2"));
app.use("/static/modules",express.static("modules"));

app.get("/",function(req,res){
	res.send("Routing Example");	
});

app.listen(8023,function(){
	console.log("Demo App listening to port 8023");
});