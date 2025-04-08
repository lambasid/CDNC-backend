const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  city: String,
  province: String,
  zipCode: String,
  description: String,
  password: String,
}, { collection: "users" });

module.exports = mongoose.model("User", UserSchema);
