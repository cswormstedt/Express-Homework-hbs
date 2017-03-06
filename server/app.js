var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);
var path	= require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//user info
var users = [{username: "admin", password: "password"}, {username: "mikey", password: "pizza"}]

var profile = [{ 
	"username": "Michelangelo",
	"url": "https://s-media-cache-ak0.pinimg.com/originals/92/76/fb/9276fbaafb5b3a35037827d528aed9e9.png",
	"about": "Pizza, skateboading, nunchucks, pizza"
}]

//will have the profile
app.get('/home', function(req, res){
	res.render('home', {userData: profile});
})

//will sign up keep data and redirect to login
app.get('/register', function(req, res){
	res.render('register', {})
})

app.post('/register', function(req, res){
	users.push({username: req.body.username, password: req.body.password});
	console.log(users);
	res.redirect('/login');
})

//will login and direct to home
app.get('/login', function(req, res){
	console.log('hi')
	res.render('login')
})

app.post('/login', function(req, res){
	console.log(req.body);
	var loginName 	  = req.body.username;
	var loginPassword = req.body.password;

	for(var i = 0; i < users.length; i++){
		if(loginName === users[i].username && loginPassword === users[i].password){
				console.log('yup')
				res.redirect('/home');
		// 	} else if(loginName != users[i].username || loginPassword != users[i].password){
		// 		res.send('Warriors blew a 3-1 lead')
		// } the fail needs to be called at a different time because it will override anything and call it first
		}
	}
})




server.listen(3000, function(){
	console.log("yo it's andre port 3000");
})