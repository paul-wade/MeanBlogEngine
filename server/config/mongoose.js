/**
 * Created by paul on 6/16/14.
 */
var mongoose = require('mongoose'),
    postModel = require('../models/post');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });

    postModel.createDefaultPosts();
};

