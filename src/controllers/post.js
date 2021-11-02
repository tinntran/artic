const Post = require('../models/post')
const Draft = require('../models/draft')
const marked = require('marked')

async function index(req, res) {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    res.render('home', { posts })
}

async function postSlug(req, res) {
    try {
        const post = await Post.findOne({ slug: req.params.slug })
        res.render('postSlug', { post, htmlContent: marked(post.content) })
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
    Object.keys(req.body).map(k =>
        req.body[k] = typeof req.body[k] == 'string' ? req.body[k].trim() : req.body[k]
    )
    await Post.findOneAndUpdate({ slug: req.params.slug }, req.body)
    res.redirect(`/${req.params.slug}`)
}

async function deletePost(req, res) {
    await Post.findOneAndDelete({ slug: req.params.slug })
    res.redirect('/')
}

async function addPost(req, res) {
    if (req.body.isDraft == "no") {
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
    } else {
        const newDraft = new Draft({
            title: req.body.title,
            content: req.body.content,
        })
        
        try {
            await newDraft.save()
            res.redirect('/draft')
        } catch (err) {
            console.error(err)
            res.redirect('/')
        }
    }
}

module.exports = {
    index,
    addPost,
    newPost,
    postSlug,
    deletePost,
    editPost,
    updatePost,
}