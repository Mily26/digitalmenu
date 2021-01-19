const Business = require("../models/businessModel")

class BusinessService {
    listBusiness() {
        return Business.find();
    }
    getBusiness(code) {
        return Business.findOne({code: code})
    }
}

module.exports = BusinessService;