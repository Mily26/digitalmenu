const Menu = require("../models/menuModel")

class MenuService {
    listMenu() {
        return Menu.find();
    }
    getMenu(code) {
        return Menu.findOne({code: code})
    }
}
module.exports = MenuService;