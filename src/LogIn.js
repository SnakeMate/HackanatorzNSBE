'use strict';
var USER_DB = require('../MOCK_DB/USER_DB.json');
var logger = require('./logger');
var LogIn = {
	isLoggedOn: function (request) {
	return request.session.keys[0] !== null;
},

	validateLoginInfo: function (username, password) {
	logger.info('Log In: ' + 'USERNAME: ' + username + " PASSWORD: " + password);
	logger.info(JSON.stringify(USER_DB));
 	for (var i = 0; i < USER_DB.users.length; i++){
			if (USER_DB.users[i].name === username){
				return USER_DB.users[i].password === password;
			}
		}

	return false;
	}
};
// ){
// 	return USER_DB[username].password === password;
// }
module.exports = LogIn;
