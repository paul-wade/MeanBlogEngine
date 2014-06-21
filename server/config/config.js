/**
 * Created by paul on 6/14/14.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/meanblogengine',
        rootPath: rootPath,
        port: process.env.PORT || 3003
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://e:e@ds053178.mongolab.com:53178/meanblogengine',
        port: process.env.PORT || 80
    }
};