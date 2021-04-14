const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')





router.post('/login', adminController.loginAdmin);








module.exports = router;