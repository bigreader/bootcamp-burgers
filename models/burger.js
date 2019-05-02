var orm = require('../config/orm.js');

module.exports = {

	list: function(back) {
		orm.selectAll(data => {
			back(data);
		});
	}

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
