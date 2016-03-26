//ROUTER
var express = require('express');
var router = express.Router();
var LogIn = require('../src/LogIn.js');
var hat = require('hat');
var logger = require('../src/logger.js');

// router.get('/', function(request,response){
// 	response.render('login');
// });

router.route('/')
	.post(function(req, resp){
		logger.info('POST>>> login page');
		if (LogIn.validateLoginInfo(req.body.username, req.body.password)){
			//when the user entered the valid information

		//	req.key[0] = hat();
			logger.info("Logged in");
			//get the users information
			//test if the user has completed the questionaire
			//if so render homepage else render quesitonaire
			resp.render('questionnaire');
		}
		else{
			//when the user entered the wrong information
			logger.info("post>>> login page | WRONG password");
			resp.render('Hack3');
		}
	}).get(function(req, resp){
		logger.info("GET>>> reached URL");
		// var loggedOn = logger.info(LogIn.validateLoginInfo(req.param('username'), req.param('password')));
		// if (loggedOn){
		// 	resp.send("YOU ARE LOGGED ON");
		// }
		// else{
			resp.render('Hack3');
		// }
	});

	router.route('/questionnaire').get(function(req, resp){
		resp.render('questionnaire');
	}).post(function(req, resp){
		logger.info('Questionnaire completed');
		//create user and store information

		resp.render('home_page');
	});

	router.route('/dashboard').get(function(req, resp){
		logger.info('GET>>> dashboard')
		resp.render('home_page');
	}).post(function(req, resp){
		logger.info('POST>>> /dashboard');
		//create user and store information

		resp.render('home_page');
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
