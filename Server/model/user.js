const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
name: String,
email:String,
password:String,
phone:String
});

const UserModel = mongoose.model("userDetails",UsersSchema)

module.exports = UserModel;