const post = require('./post')

function routes(app) {
    app.use(post)
}

module.exports = routes