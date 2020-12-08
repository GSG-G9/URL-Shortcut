require('env2')('./config.env');

const { join } = require('path');

const express = require('express');
const logger = require('morgan');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;
