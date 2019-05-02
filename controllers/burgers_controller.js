var express = require('express');
var burger  = require('../models/burger.js');

var router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());


router.get('/', (req, res) => {
	// console.log('GET index');
	burger.list(burgers => {
		res.render('index', {burgers:burgers});
	});
})


router.get('/api/burgers', (req, res) => {
	console.log('GET burgers');
	burger.list(burgers => {
		res.json(burgers);
	});
});

router.post('/api/burgers', (req, res) => {
	console.log('POST burgers', req.body);
	var name = req.body.name;
	if (!name) return res.status(400).json({error: 'Please enter a burger name.'});

	burger.add(req.body.name, id => {
		res.json({
			success: true,
			id: id
		});
	});
});

router.put('/api/burgers/:id', (req, res) => {
	console.log('PUT burger', req.params.id);
	burger.devour(req.params.id, found => {
		if (!found) res.status(404);
		res.end();
	});
});

module.exports = router
