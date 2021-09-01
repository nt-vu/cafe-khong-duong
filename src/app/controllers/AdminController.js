const Post = require('../models/Post')
const {mongooseToObject } = require('../../util/mongoose');

class AdminController{
    index(req, res, next) {
        res.render('admin/homePage')
    }

    create(req, res, next) {
        res.render('admin/create')
    }

    // [POST] admin/post
    post(req, res, next){
        // res.json(req.body)
        const formData = req.body;
        const post = new Post(formData);
        post.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }
}

module.exports = new AdminController();