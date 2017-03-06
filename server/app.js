var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);
var path	= require('path');
var bodyParser = require('body-parser');


//user info
var users = [{username: "admin", password:"password"}]


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//will have the profile
app.get('/home', function(req, res){
	res.render('home', {})
})
//will login and direct to home
app.get('/login', function(req, res){
	res.render('login', {})
})
//will sign up keep data and redirect to login
app.get('/register', function(req, res){
	res.render('register', {})
})

app.post('/register', function(req, res){
	users.push({username: req.body.username, password: req.body.password});
	console.log(users);
	res.render('login', {});
})




server.listen(3000, function(){
	console.log("yo it's andre port 3000");
})