const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Endpoint: GET /api/dashboard/data
router.get('/data', dashboardController.getFormulirData);

module.exports = router;
