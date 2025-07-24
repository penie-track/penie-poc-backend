import { Schema, model, Document } from "mongoose";

export interface ITransaction extends Document {
  userId: Schema.Types.ObjectId;
  amount: number;
  type: "income" | "expense";
  categoryId: Schema.Types.ObjectId;
  note: string;
  date: Date;
  tags: string[];
  isRecurring: boolean;
  createdAt: Date;
}

const transactionSchema = new Schema<ITransaction>({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number },
  type: { type: String, enum: ["income", "expense"] },
  note: { type: String },
  date: { type: Date },
  tags: [{ type: String }],
  isRecurring: { type: Boolean, default: false },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  createdAt: { type: Date, default: Date.now },
});

const Trasaction = model<ITransaction>("Transaction", transactionSchema);

export default Trasaction;
