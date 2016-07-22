var connection = require('../modules/mysql');
var express  = require('express');
var router   = express.Router();

var sendSnapCtrl = require('../controller/sendSnapCtrl');

router.post('/sendSnap', sendSnapCtrl);

module.exports = router;