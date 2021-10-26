const Post = require('../models/post')

async function home(req, res) {
    const posts = await Post.find()
    res.json(posts)
}

module.exports = { home }