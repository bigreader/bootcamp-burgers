var db = require('./connection.js');

module.exports = {

	selectAll: function(where, back) {
		if (!where) {
			db.query('SELECT * FROM burgers', (err, data) => {
				if (err) throw err;
				back(data);
			});
		} else {
			db.query('SELECT * FROM burgers WHERE ?', where, (err, data) => {
				if (err) throw err;
				back(data);
			});
		}
	},

	insertOne: function(data, back) {
		db.query('INSERT INTO burgers SET ?', data, (err, result) => {
			if (err) throw err;
			back(result);
		});
	},

	updateOne: function(where, data, back) {
		db.query('UPDATE burgers SET ? WHERE ?', [data, where], (err, result) => {
			if (err) throw err;
			back(result);
		});
	}

}
