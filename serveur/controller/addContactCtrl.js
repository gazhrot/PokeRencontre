var connection = require('../modules/mysql');

var addContact = function(req, res) {

	var exist = false;

	if (req.body.id && req.body.email && req.body.token && req.body.contact) {
		console.log(req.body);
		var aquery = connection.query('SELECT * FROM user WHERE email = ? AND token = ?', [req.body.email, req.body.token], function(err, rows) {
			if (err) {
				console.log('error');
			} else {
				if (rows.length > 0) {
					var bquery = connection.query('SELECT * FROM contact WHERE user_id = ?', req.body.id, function(err, rows) {
						if (err) {
							console.log(err);
						} else {
							var contact = [];
							for (var i = 0; i < rows.length;i++) {
								if (req.body.contact == rows[i].contact_id) {
									exist = true;
								} else {
									contact.push({
										id: rows[i].contact_id,
										email: rows[i].contact_email
									});
								}
							}
							if (false === exist) {
								var cquery = connection.query('INSERT INTO contact (user_id, contact_id, status) VALUES (?, ?, 0)', [req.body.id, req.body.contact], function (err, rows) {
									if (err) {
										console.log(err);
									} else {
										console.log(rows);
										if (rows.affectedRows > 0) {
											res.send(JSON.stringify({error: 'utilisateur bien ajouter', data: contact}));
										}
									}
								});
							} else {
								res.send(JSON.stringify({error: 'le contact est deja dans votre liste d\'ami', data: contact}));
							}
						}
					});
				} else {
					res.send(JSON.stringify({error: 'mauvais email ou token', data: []}));
				}
			}
		});
	}
}

module.exports = addContact;