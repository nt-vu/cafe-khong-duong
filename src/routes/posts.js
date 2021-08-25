const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/PostController');


router.get('/:slug', courseController.show);
router.get('/', courseController.index)

module.exports = router;
