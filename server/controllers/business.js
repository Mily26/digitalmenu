

class BusinessController {
    constructor(businessService) {
        this.businessService = businessService;
    }
    async listBusiness(req, res) {
        const result = await this.businessService.listBusiness();
        res.json(result);
    }
    async getBusiness(req,res) {
        const code = req.params.code;
        const result = await this.businessService.getBusiness(code);
        if(result == null) {
            res.sendStatus(404);
        } else {
            res.json(result);
        }
        
    }
}

module.exports = BusinessController;