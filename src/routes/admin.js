const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');


router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.update)
router.get('/manage', adminController.manage);
router.post('/post', adminController.post);
router.get('/create', adminController.create);
router.get('/', adminController.index);

module.exports = router;