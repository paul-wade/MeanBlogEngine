/**
 * Created by paul on 6/14/14.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db:   process.env.MONGOLAB_URI || 'mongodb://'+ process.env.IP +'/meanblog',
        rootPath: rootPath,
        port: process.env.PORT || 3003
    } 
};