const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    city: String,
    province: String,
    zipCode: String,
    description: String,
    password: String,
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel