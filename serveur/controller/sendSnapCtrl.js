var connection = require('../modules/mysql');
var multer     = require('multer');
var path = require('path');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '../uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({ storage : storage}).single('snap');

var sendSnapCtrl = function(req, res) {

	upload(req,res,function(err) {
      if(err) {
        console.log(err);
        res.send(JSON.stringify({error: 'Impossible d\'upload la photo', data: []}));
      }
      var snapurl = 'http://localhost:3000/uploads/' + 'prout';

      if (req.body.email && req.body.token && req.body.temps && req.body.u2) {
        var aquery = connection.query('INSERT INTO snapchat (email_sender, id_receiver, url, duration, view) VALUES (?, ?, ?, ?, ?)', [req.body.email, req.body.u2, snapurl, req.body.temps, 0], function(err, rows) {
          if (err) {
            res.send(JSON.stringify({error: 'Il y a une erreur quelque part mdr.', data: []}));
          } else {
            res.send(JSON.stringify({error: true, data: 'Snap bien envoyer', token: ''}));
          }
        });
      }
    });
}

module.exports = sendSnapCtrl;