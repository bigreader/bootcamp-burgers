var orm = require('../config/orm.js');

module.exports = {

	add: function(name, back) {
		orm.insertOne({
			name: name
		}, result => {
			back(result.insertId);
		});
	},

	devour: function(id, back) {
		orm.updateOne({
			id: id
		}, {
			devoured: true
		}, result => {
			back(result.affectedRows > 0);
		});
	}

}
