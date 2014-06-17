/**
 * Created by paul on 6/16/14.
 */
var User = require('mongoose').model('Post');

exports.getPosts = function(req, res) {
    User.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};