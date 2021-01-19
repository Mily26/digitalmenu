const mongoose = require("mongoose")
const businessSchema = new mongoose.Schema({
    title: String,
    address: String,
    city: String,
    state: String,
    country: String,
    mail: String,
    phone: String,
    code: String
})

const Business = mongoose.model("Business", businessSchema, "businesses")
module.exports = Business