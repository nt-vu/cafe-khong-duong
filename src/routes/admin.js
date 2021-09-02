const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');


router.delete('/:id', adminController.delete)
router.put('/:id', adminController.update);
router.get('/:id/edit', adminController.edit);
router.get('/manage', adminController.manage);
router.post('/post', adminController.post);
router.get('/create', adminController.create);
router.get('/', adminController.index);

module.exports = router;