const siteRouter = require('./site');
const newsRouter = require('./news');
const postsRouter = require('./posts')
const admminRouter = require('./admin')

function route(app) {
    app.use('/admin',admminRouter);
    app.use('/news', newsRouter);
    app.use('/posts', postsRouter);


    app.use('/', siteRouter);
}

module.exports = route;
