const mongoose = require('mongoose')

const URI = process.env.DB_URI

async function connect() {
    try {
        await mongoose.connect(URI)
        console.log('Connected to database successfully!')
    } catch (error) {
        console.error('Error connecting to database: ' + error)
    }
}

module.exports = { connect }