//ROUTER
var express = require('express');
var router = express.Router();
var LogIn = require('../src/LogIn.js');
var hat = require('hat');
var logger = require('../src/logger.js');

router.get('/', function(request,response){
	response.render('index');
});

router.route('/login')
	.put(function(req, resp){
		if (LogIn.validateLoginInfo(req.username, req.password)){
			//when the user entered the valid information

			req.key[0] = hat();
			resp.send('YOU ARE LOGGED IN :D');
		}
		else{
			//when the user entered the wrong information
			resp.render('/login');
		}
	}).get(function(req, resp){
		logger.info("reached URL");
		var loggedOn = logger.info(LogIn.validateLoginInfo(req.param('username'), req.param('password')));
		if (loggedOn){
			resp.send("YOU ARE LOGGED ON");
		}
		else{
			resp.render('/login');
		}
	});
// router.route('/register')
// 	.get(function(request,response){
// 	response.render('register');
// })
// 	.post(function(request, response){
// 		validateInfo(request.info);
// 		request.session.keys[0] = hat();
// 		var currentUser = {
// 			firstname: request.body.first,
// 			lastname: request.body.last,
// 			emailaddress: request.body.emailaddress,
// 			password: request.body.password,
// 			birthday: request.body.birthday,
// 			collegename: request.body.college
// 		};
//
// 		response.render('dashboard',{currentUser: currentUser, orderrequests: appUsers.users});
// 	});

module.exports = router;
