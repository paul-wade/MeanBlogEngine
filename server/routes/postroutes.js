/**
 * Created by paul on 6/16/14.
 */

var posts = require('../controllers/posts');

module.exports = function(app) {
    app.get('/api/posts',  posts.getPosts);
};