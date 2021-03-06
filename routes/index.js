var express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hackernews');
const Post = require('../models/post');
const Vote = require('../models/vote');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/posts');
});

router.get('/posts', async function(req, res) {
    let posts = await Post.find();
    res.render('index', { posts });
});

router.post('/posts/:id/vote', async function(req, res) {
    let post = await Post.findById(req.params.id);
    let vote = new Vote({value: 1});
    post.votes.push(vote);
    await post.save();
    await vote.save();
    //let currentPost = JSON.stringify(post);
    //console.log(currentPost);
    res.status(200).json(post);


});

router.delete('/:id', async function(req, res, next) {
    let post = await Post.findById(req.params.id);
    Post.deleteOne(post);
    res.status(200);
});

router.post('/posts', async function(req, res) {
    let newPost = new Post({title: req.body.title, username: 'User', commentCount: Math.floor(Math.random() * 1000)});
    await newPost.save();
    res.redirect('/posts');
});

// router.get('/posts/:id', async function(req,res) {
//     let post = await Post.findById(req.params.id);
//
//     res.render('post', { post });
// });

module.exports = router;


