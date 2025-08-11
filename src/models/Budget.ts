import { Schema, model, Document } from "mongoose";

export interface IBudget extends Document {
  userId: Schema.Types.ObjectId | string;
  categoryId: Schema.Types.ObjectId | string;
  amount: number;
  month: number;
  year: number;
  createdAt: Date;
}

const budgetSchema = new Schema<IBudget>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Budget = model<IBudget>("Budget", budgetSchema);
export default Budget;
