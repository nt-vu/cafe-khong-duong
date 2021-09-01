const Post = require('../models/Post');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Post.find({})
            .then((posts) => {
                res.render('home', {
                    posts: mutipleMongooseToObject(posts).slice(0,5),
                });
            })
            .catch(next);
        // res.;
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
