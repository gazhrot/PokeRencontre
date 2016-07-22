var connection = require('../modules/mysql');
var express  = require('express');
var router   = express.Router();

var changePasswordCtrl = require('../controller/changePasswordCtrl');

router.post('/password', changePasswordCtrl);

module.exports = router;