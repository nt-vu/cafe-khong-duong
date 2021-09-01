const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')

const Post = new Schema({
    title: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String},
    content: { type: String, maxLength: 2000 },
    slug: { type: String, slug: 'title', unique: true},
}, {
    timestamps: true,
});

mongoose.plugin(slug);

module.exports = mongoose.model('Post', Post);
