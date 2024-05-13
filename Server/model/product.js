const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
Pname: String,
Pprice:String,
PDescription:String,
PImage:String,
});

const ProductModel = mongoose.model("ProductDetails",UsersSchema)

module.exports = ProductModel;