/**
 * Created by paul on 6/16/14.
 */
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var postSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!', unique: true},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    body :{type:String},
    tags: [String]
});

postSchema.methods = {

};

postSchema.plugin(uniqueValidator);

var Post = mongoose.model('Post', postSchema);

function createDefaultPosts() {
    Post.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Post.create({title: 'C# for Sociopaths',body:'<h1>welcome to this blog post</h1> <p>blah blah blah blah</p>', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
            Post.create({title: 'C# for Non-Sociopaths', featured: true, published: new Date('10/12/2013'), tags: ['C#']});
            Post.create({title: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2013'), tags: ['C#']});
            Post.create({title: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
            Post.create({title: 'Pedantic C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
            Post.create({title: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013'), tags: ['JS']});
            Post.create({title: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2013'), tags: ['Coding']});
            Post.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013'), tags: ['Coding']});
            Post.create({title: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013'), tags: ['Misc']});
            Post.create({title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2013'), tags: ['Management']});
            Post.create({title: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013'), tags: ['Misc']});
            Post.create({title: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2013'), tags: ['Coding']});
            Post.create({title: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2013'), tags: ['Coding']});
            Post.create({title: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2013'), tags: ['Misc']});
            Post.create({title: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2013'), tags: ['Coding', 'Misc']});
        }
    });
}

exports.createDefaultPosts = createDefaultPosts;