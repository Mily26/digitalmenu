class MenuController {
  constructor(menuService) {
    this.menuService = menuService;
  }
  async listMenu(req,res) {
    const result = await this.menuService.listMenu();
    res.json(result);
  }
  async getMenu(req,res) {
    const code = req.params.code;
    const result = await this.menuService.getMenu(code);
    if(result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  }
  
}

module.exports = MenuController;
