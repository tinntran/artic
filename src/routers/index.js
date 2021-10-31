const post = require('./post')
const draft = require('./draft')

function routes(app) {
    app.use('/draft', draft)
    app.use('/', post)
}

module.exports = routes