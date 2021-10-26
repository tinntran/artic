const Post = require('../models/post')

function home(req, res) {
    res.render('home')
}
module.exports = { home }