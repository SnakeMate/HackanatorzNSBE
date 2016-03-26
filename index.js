//This is the entry point for the application
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var cookie_session = require('cookie-session');
//var hut = require('hat');
//var connectApp = require('connect');

var app = express();
//app.use(cookie_session({keys: [null]}))
//var mongoStore = require('connect-mongo')(app);


//define our render engine. It will allow use to embed Javascript in our HTML page. file extention is .ets
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//allows our app to parse files with easy
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));
app.use('/',routes);

//SHOULD BE THE LAST ROUTE IN FILE

/*app.get('*', function(request,response){
	console.log("incorrect address passed")
	response.render('Bad route. Go to http://localhost:3000/');
});*/

var server = app.listen(3000, function(){
	console.log("Listening... go to http://localhost:3000/")
});
