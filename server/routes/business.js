const express = require('express');
const router = express.Router();
const BusinessController = require('../controllers/business');
const businessInstance = new BusinessController();

//api/business/
router.get('/', businessInstance.getData);

module.exports = router;