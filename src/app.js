'use strict';

// Used to have es6 imports working correctly
/* eslint-disable-next-line node/no-unpublished-require */
require("babel-register");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080; // set app port
const router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

router.use('/api', require('./app.routing'));
app.use(router);

app.listen(port, function() {
	console.log(`Listening on port ${port}...`);
})