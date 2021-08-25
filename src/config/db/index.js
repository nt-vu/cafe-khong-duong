const mongoose = require('mongoose');

async function connect() {
    try {
        
        await mongoose.connect('mongodb+srv://tuanvu02:tuanvu02@cluster0.gjwyy.mongodb.net/Hapi-blog-post?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('=======Success!=======');
    } catch (error) {
        console.log('======Error=======');
    }
}

module.exports = { connect };
