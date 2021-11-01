const Draft = require('../models/draft')

async function index(req, res) {
    const drafts = await Draft.find({}).sort({ createdAt: -1 })
    res.render('draft', { drafts })
}

module.exports = {
    index
}