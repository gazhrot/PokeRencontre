var connection = require('../modules/mysql');
var express  = require('express');
var router   = express.Router();

var addContactCtrl = require('../controller/addContactCtrl');

router.post('/addContact', addContactCtrl);

module.exports = router;