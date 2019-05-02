var express = require('express');
var burger  = require('../models/burger.js');

var router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/', (req, res) => {
	burger.list(burgers => {
		res.json(burgers);
	});
});

router.post('/', (req, res) => {
	burger.add(id => {
		res.json({
			success: true,
			id: id
		});
	});
});

router.put('/:id', (req, res) => {
	burger.devour(req.params.id, found => {
		if (!found) res.status(404);
		res.end();
	});
});

module.exports = router
