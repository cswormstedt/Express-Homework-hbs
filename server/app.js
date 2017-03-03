var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);

server.listen(3000, function(){
	console.log("yo it's andre port 3000");
})