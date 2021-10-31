const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
}, { timestamps: true })

schema.pre('validate', function (next) {
    if (this.title) {
        this.slug = `${slugify(this.title, { lower: true, strict: true })}${uuid.v4()}`
    }

    next()
})

module.exports = mongoose.model('Draft', schema)