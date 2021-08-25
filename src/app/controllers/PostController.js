const Posts = require('../models/Post')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /posts/:slug
   
    show(req, res, next) {
        Posts.findOne({slug: req.params.slug})
            .then(post => {
                res.render('posts/show', {post: mongooseToObject(post)})
            })
            .catch(next)
    }

    index(req, res, next) {
        Posts.find()
            .then(posts => {
                res.render('posts/index', {
                    posts: mutipleMongooseToObject(posts),
                });
            })
            .catch(next)
        }
        
}

module.exports = new CourseController();
