/**
 * Created by paul on 6/14/14.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://'+process.env.IP +'/meanblogengine',
        rootPath: rootPath,
        port: process.env.PORT || 3003
    } 
};