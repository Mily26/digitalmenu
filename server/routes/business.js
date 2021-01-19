const express = require('express');
const router = express.Router();
const BusinessController = require('../controllers/business');
const BusinessService = require("../services/businessService")
const businessInstance = new BusinessController(new BusinessService());

//api/business/
router.get('/', businessInstance.listBusiness.bind(businessInstance));
router.get('/:code', businessInstance.getBusiness.bind(businessInstance));

module.exports = router;