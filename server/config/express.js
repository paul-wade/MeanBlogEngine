/**
 * Created by paul on 6/14/14.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

module.exports = function(app, config) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    // view engine setup
    app.set('views', path.join(config.rootPath , '/server/views'));
    app.set('view engine', 'jade');

    app.use(favicon(path.join(config.rootPath,'/public/favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(require('stylus').middleware(path.join(config.rootPath , 'public')));
    app.use(express.static(path.join(config.rootPath , 'public')));


}