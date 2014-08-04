/**
 * Created by paul on 6/16/14.
 */
var Posts = require('mongoose').model('Post');

exports.getPosts = function(req, res) {
    Posts.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.createPost = function(req, res) {
    var postData = req.body;
    Posts.create(postData, function(err, user) {

    });
};