const Draft = require('../models/draft')
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

async function deleteDraft(req, res) {
    await Draft.findOneAndDelete({ slug: req.params.slug })
    res.redirect('/draft')
}

async function updateDraft(req, res) {
    try {
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
    deleteDraft,
    updateDraft,
}