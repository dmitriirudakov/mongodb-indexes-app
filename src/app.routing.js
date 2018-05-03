'use strict';

const express = require('express');
const router = express.Router();

router.use('/articles', require('./controllers/articles'));
router.use('/rubrics', require('./controllers/rubrics'));
router.use('/tags', require('./controllers/tags'));
router.use('/users', require('./controllers/users'));

router.get('/', function(req, res) {
	res.send('Home page');
});

router.get('/about', function(req, res) {
	res.send('Learn about us');
});

module.exports = router;