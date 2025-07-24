import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  userId: Schema.Types.ObjectId | string;
  name: string;
  type: "income" | "expense";
  color: string;
  createdAt: Date;
  icon: string;
}

const categorySchema = new Schema<ICategory>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  type: { type: String, enum: ["income", "expense"] },
  color: { type: String },
  icon: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Category = model<ICategory>("Category", categorySchema);
export default Category;
