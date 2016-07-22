var connection = require('../modules/mysql');
var express  = require('express');
var router   = express.Router();

var userInfoCtrl = require('../controller/userInfoCtrl');

router.post('/info', userInfoCtrl);

module.exports = router;