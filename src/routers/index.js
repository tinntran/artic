const home = require('./home')

function routes(app) {
    app.use(home)
}

module.exports = routes