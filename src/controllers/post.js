const Post = require('../models/post')

async function home(req, res) {
    const posts = await Post.find()
    res.render('home', { posts })
}

async function addPost(req, res) {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
    })

    try {
        await newPost.save()
    } catch (err) {
        console.error(err)
    }
}

module.exports = { home, addPost }