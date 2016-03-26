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
	.put(function(req, resp){
		logger.info('POST>>> login page');
		if (LogIn.validateLoginInfo(req.username, req.password)){
			//when the user entered the valid information

			req.key[0] = hat();
			logger.info("Logged in");
			//get the users information
			//test if the user has completed the questionaire
			//if so render homepage else render quesitonaire
			resp.render('/questionaire');
		}
		else{
			//when the user entered the wrong information
			logger.info("PUT>>> login page | WRONG password");
			resp.render('login');
		}
	}).get(function(req, resp){
		logger.info("GET>>> reached URL");
		// var loggedOn = logger.info(LogIn.validateLoginInfo(req.param('username'), req.param('password')));
		// if (loggedOn){
		// 	resp.send("YOU ARE LOGGED ON");
		// }
		// else{
			resp.render('login');
		// }
	});

	router.route('/quesitonnaire').get(function(req, resp){
		resp.render('questionnaire');
	}).put(function(req, resp){
		logger.info('Questionaire completed');
		//create user and store information

		resp.render('/dashboard');
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
