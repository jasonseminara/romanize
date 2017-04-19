'use strict';

// regular stuff
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');

// This tests to see if we have NODE_ENV in our environment.
// Only load the dotenv if we need it.
// the last true is only there so if dotenv loaded, the statement returns true,
// instead of the config object.
process.env.isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const PORT = process.argv[2] || process.env.port || 3000;

const app = express();

// set up some logging
app.use(logger(process.env.isDev ? 'dev' : 'common'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/convert', require('./routes/api'))
app.use('/', require('./routes/index'));
app.get('/admin', (req, res) => {
  res.render('pages/admin');
});
// Let's go!
app.listen(PORT);
