var express = require('express');

var app = express();

const init = require('./config');
init(app, express);

app.listen(8080, 'localhost');
// module.exports = app;
