const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    content: { type: String, maxLength: 2000 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);
