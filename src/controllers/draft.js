const Draft = require('../models/draft')
const Post = require('../models/post')
const marked = require('marked')

async function index(req, res) {
    const drafts = await Draft.find({}).sort({ createdAt: -1 })
    res.render('draft', { drafts })
}

async function view(req, res) {
    const draft = await Draft.findOne({ slug: req.params.slug })
    res.render('draft/draftView', { draft, htmlContent: marked(draft.content) })
}

async function edit(req, res) {
    const draft = await Draft.findOne({ slug: req.params.slug })
    res.render('draft/editDraft', { draft })
}

async function publishDraft(req, res) {
    try {
        const draft = await Draft.findOne({ slug: req.params.slug})
        const newPost = new Post({
            title: draft.title,
            content: draft.content,
        })
        await newPost.save()
        await Draft.findOneAndDelete({ slug: req.params.slug })
        res.redirect(`/${newPost.slug}`)
    } catch (error) {
        console.error(error)
        res.redirect('/')
    }
}

async function deleteDraft(req, res) {
    await Draft.findOneAndDelete({ slug: req.params.slug })
    res.redirect('/draft')
}

async function updateDraft(req, res) {
    try {
        Object.keys(req.body).map(k =>
            req.body[k] = typeof req.body[k] == 'string' ? req.body[k].trim() : req.body[k]
        )
        await Draft.findOneAndUpdate({ slug: req.params.slug }, req.body)
        res.redirect(`/draft/${req.params.slug}`)
    } catch (err) {
        console.error(err)
        res.redirect('/')
    }
}

module.exports = {
    index,
    view,
    edit,
    publishDraft,
    deleteDraft,
    updateDraft,
}