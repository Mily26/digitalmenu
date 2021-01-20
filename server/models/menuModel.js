const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
})
const categorySchema =  new mongoose.Schema({
    name: String,
    items: [itemSchema]
})
const menuSchema = new mongoose.Schema({
code: String,
categories: [categorySchema]
})
const Menu = mongoose.model("Menu",menuSchema, "menus")
module.exports = Menu