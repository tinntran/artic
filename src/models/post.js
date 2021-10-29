const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDompurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDompurify(new JSDOM().window)

const schema = new mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
}, { timestamps: true })

schema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true})
    }

    next()
})

module.exports = mongoose.model('Post', schema)