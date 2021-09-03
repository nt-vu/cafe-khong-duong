const Post = require('../models/Post')
const {mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

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

    // [GET] admin/manage
    manage(req, res, next){
        Promise.all([Post.find({}), Post.countDocumentsDeleted()])
            .then( ([posts, deletedCount]) =>{
                res.render('admin/manage',{
                    deletedCount,
                    posts: mutipleMongooseToObject(posts)
                })
            })
            .catch(next);
    }

    //[GET] admin/manage/trash
    trash(req, res, next){
        Post.findDeleted({})
            .then((posts) => {
                res.render('admin/trash', {
                    posts: mutipleMongooseToObject(posts)
                })
            })
            .catch(next)
    }

    // [GET] admin/edit
    edit(req, res, next){
        Post.findById(req.params.id)
            .then(post => res.render('admin/edit', {
                post: mongooseToObject(post)
            }))
            .catch(next)
    }

    // [PUT] /admin/:id
    update(req, res, next) {
        Post.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/manage'))
            .catch(next)
    }

    // [DELETE] /admin/:id
    delete(req, res, next) {
        Post.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /admin/:id/destroy
    destroy(req, res, next) {
        Post.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /admin/:id/restore
    restore(req, res, next){
        Post.restore({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
}

module.exports = new AdminController();