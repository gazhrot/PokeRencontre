var connection = require('../modules/mysql');

var userInfo = function(req, res) {

	if (req.body.email && req.body.token) {
		var aquery = connection.query('SELECT * FROM user WHERE email = ? AND token = ?', [req.body.email, req.body.token], function(err, rows) {
			if (err) {
				res.send('error');
			} else {
				if (rows.length > 0) {
					res.send({error: 'pas d\'erreur', data: JSON.stringify(rows), token: rows[0].token});
				}
			}
		})
	}
}

module.exports = userInfo;