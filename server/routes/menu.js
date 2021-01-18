const express = require('express')
const router = express.Router();
const MenuController = require('../controllers/menu')
const menuInstance = new MenuController();

//GET /api/menu
router.get('/', menuInstance.getMenus);

module.exports = router;