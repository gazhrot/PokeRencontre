var express    = require("express");
var multer     = require('multer');
var app        = express();
var path       = require('path');
var qs         = require('querystring');
var formidable = require("formidable");
var util       = require('util');
var bodyParser = require('body-parser');
//var DBQuery    = require('../orm_nodejs/DBQuery');
var connection = require('./modules/mysql');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {
    // autorise quelle site a envoyer des donné (ici tout le monde)
    res.setHeader('Access-Control-Allow-Origin', '*');
    // quelle type de requete sont autoriser
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // OBLIGER SINON PAS DE RECEPTION DE DATA !!
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pour l'API
    res.setHeader('Access-Control-Allow-Credentials', true);
    //Pour continuer dnas les autres function
    next();
});

connection.connect(function(err) {
    if (err) {
        console.log('cant connect to DB');
        console.log(err);
    } else {
        console.log('connected to DB');
    }
});

app.use('/user'    , require('./routes/inscription_route.js'));
app.use('/user'    , require('./routes/connection_route.js'));
/*app.use('/user'    , require('./routes/alluser_route.js'));
app.use('/user'    , require('./routes/userInfo_route.js'));
app.use('/user'    , require('./routes/changePwd_route.js'));
app.use('/user'    , require('./routes/addContact_route.js'));
app.use('/snap'    , require('./routes/sendsnap_route.js'));
app.use('/snap'    , require('./routes/getsnap_route.js'));
app.use('/snap'    , require('./routes/viewsnap_route.js'));
app.use('/uploads' , require('./routes/uploadsnap_route.js'));
*/
var port = 3000;

app.listen(port,function(){
    console.log("Working on port " + port);
});