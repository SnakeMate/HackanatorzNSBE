//ROUTER
var express = require('express');
var router = express.Router();
var appUsers = require('../testusers.json');

router.get('/', function(request,response){
	response.render('index');
});


module.exports = router;
