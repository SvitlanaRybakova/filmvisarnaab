const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encrypt = require("../utilities/encrypt");

const userSchema = new Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  phoneNumber: String,
});

// Hashes the password before saving it to the DB
userSchema.pre("save", function (next) {
  this.password = encrypt(this.password);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
