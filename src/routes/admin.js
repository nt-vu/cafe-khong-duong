const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');


router.post('/post', adminController.post);
router.get('/create', adminController.create);
router.get('/', adminController.index);

module.exports = router;