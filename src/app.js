require('env2')('./config.env');

const { join } = require('path');

const express = require('express');
const logger = require('morgan');

const router = require('./routes');
const { errorhandler, notFound } = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

app.use(notFound);
app.use(errorhandler);

module.exports = app;
