var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
	console.log('it works');
});

module.exports = router;
