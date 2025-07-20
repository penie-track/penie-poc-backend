import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  salt: { type: String },
  passwordHash: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
