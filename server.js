//TODO: update import/export to ES6
//import express from 'express';
//import routes from './api/routes.js';
var express = require('express')
var app = express();
var port = process.env.PORT || 3333;

var routes = require('./api/routes');
routes(app);
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});


