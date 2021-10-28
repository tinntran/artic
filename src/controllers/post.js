const Post = require('../models/post')

async function home(req, res) {
    const posts = await Post.find()
    res.render('home', { posts })
}

async function postSlug(req, res) {
    try {
        const post = await Post.findOne({ slug: req.params.slug })
        res.render('postSlug', { post })
    } catch (err) {
        console.error(err)
        res.redirect('/')
    }
}

async function newPost(req, res) {
    res.render('newPost')
}

async function editPost(req, res) {
    const post = await Post.findOne({ slug: req.params.slug })
    res.render('editPost', { post })
}

async function deletePost(req, res) {
    await Post.findOneAndDelete({ slug: req.params.slug })
}

async function addPost(req, res) {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
    })

    try {
        newPost = await newPost.save()
        res.redirect(`/${newPost.slug}`)
    } catch (err) {
        console.error(err)
        res.redirect('/')
    }
}

module.exports = { home, addPost, newPost, postSlug, deletePost, editPost, }