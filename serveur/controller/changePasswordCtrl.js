var connection = require('../modules/mysql');
var pwd = '';

var changePasswordCtrl = function(req, res) {

	if (req.body.email && req.body.token) {
		var aquery = connection.query('SELECT * FROM user WHERE email = ? AND token = ?', [req.body.email, req.body.token], function(err, rows) {
			if (err) {
				res.send('mauvais email ou mot de passe');
			} else {
				if (rows.length > 0) {
					var bquery = connection.query('UPDATE user SET password = ? WHERE email = ? AND token = ?', [req.body.password, req.body.email, req.body.token], function(err, rows) {
						if (err) {
							res.send('Impossible de changer le mot de passe.')
						} else {
							if (rows.affectedRows > 0) {
								var cquery = connection.query('SELECT password FROM user WHERE email = ? AND token = ?', [req.body.email, req.body.token], function(err, rows) {
									if (err) {
										console.log(err);
									} else {
										pwd = rows[0].password;
									}
								});
							}
						}
					});
					console.log(pwd);
					res.send({error: 'password changer avec succes', data: JSON.stringify(rows), newPwd: pwd, token: rows[0].token});
				}
			}
		});
	}
};

module.exports = changePasswordCtrl;