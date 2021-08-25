const mongoose = require('mongoose');
const mg_url = process.env.MONGODB_URI ||'mongodb+srv://tuanvu02:tuanvu02@cluster0.gjwyy.mongodb.net/Hapi-blog-post'

async function connect() {
    try {  
        await mongoose.connect(mg_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('=======Success!=======');
    } 
    catch (error) {
        console.log('======Error=======');
    }
}

module.exports = { connect };
