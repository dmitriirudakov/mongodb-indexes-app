const express = require('express');
const router = express.Router();

const entity = 'Rubric';

router.get('/', function(req, res) {
	res.send([]);
});

router.get('/:id', function(req, res) {
	res.send(entity);
});

router.put('/', function(req, res) {
	res.send(entity + ' Created!');
});

router.post('/:id', function(req, res) {
	res.send(entity + ' Updated!');
});

router.delete('/:id', function(req, res) {
	res.send(entity + ' Removed!');
});

module.exports = router;