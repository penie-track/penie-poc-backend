import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  type: { type: String, enum: ["income", "expense"] },
  color: { type: String },
  icon: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Category", categorySchema);
