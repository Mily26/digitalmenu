const express = require('express')
const router = express.Router();
const businessRoutes = require('./business');
const menuRoutes = require('./menu')

router.use('/business', businessRoutes);
router.use('/menu', menuRoutes)

module.exports = router;