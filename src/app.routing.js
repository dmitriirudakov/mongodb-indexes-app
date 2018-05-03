'use strict';

const express = require('express');
const router = express.Router();

router.use('/articles', require('./routing/articles'));
router.use('/rubrics', require('./routing/rubrics'));
router.use('/tags', require('./routing/tags'));
router.use('/users', require('./routing/users'));

router.get('/', function(req, res) {
	res.send('Home page');
});

router.get('/about', function(req, res) {
	res.send('Learn about us');
});

module.exports = router;