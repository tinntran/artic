const Post = require('../models/post')
const marked = require('marked')

async function home(req, res) {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    res.render('home', { posts })}

async function postSlug(req, res) {
    try {
        const post = await Post.findOne({ slug: req.params.slug })
        if (!post) res.redirect('/')
        else res.render('postSlug', { post, htmlContent: marked(post.content) })
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

async function updatePost(req, res) {
    await Post.findOneAndUpdate({ slug: req.params.slug }, req.body)
    res.redirect(`/${req.params.slug}`)
}

async function deletePost(req, res) {
    await Post.findOneAndDelete({ slug: req.params.slug })
    res.redirect('/')
}

async function addPost(req, res) {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
    })

    try {
        await newPost.save()
        res.redirect(`/${newPost.slug}`)
    } catch (err) {
        console.error(err)
        res.redirect('/')
    }
}

module.exports = {
    home,
    addPost,
    newPost,
    postSlug,
    deletePost,
    editPost,
    updatePost,
}