// router/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', authController.register);

// ✅ Tambahkan ini untuk handle login
// POST /api/auth/login
router.post('/login', authController.login);




module.exports = router;
