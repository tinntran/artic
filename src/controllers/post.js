const Post = require('../models/post')
const marked = require('marked')

async function home(req, res) {
    const posts = await Post.find()
    res.render('home', { posts })
}

async function newPost(req, res) {
    res.render('newPost')
}

async function addPost(req, res) {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
    })

    try {
        await newPost.save()
        res.redirect('/')
    } catch (err) {
        console.error(err)
    }
}

module.exports = { home, addPost, newPost }