const mongoose = require("mongoose");

// schema for game user
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  score: Number,
  level: Number,
  age: Number,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
