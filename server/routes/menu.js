const express = require('express')
const router = express.Router();
const MenuController = require('../controllers/menu')
const MenuService = require("../services/menuService")
const menuInstance = new MenuController(new MenuService());

//GET /api/menu
router.get('/', menuInstance.listMenu.bind(menuInstance));
router.get('/:code', menuInstance.getMenu.bind(menuInstance));

module.exports = router;