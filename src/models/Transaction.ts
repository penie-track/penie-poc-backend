import mongoose, { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  type: "income" | "expense";
  category: string;
  amount: number;
  description: string;
  date: string;
}

const transactionSchema = new Schema<ITransaction>(
  {
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

export const TransactionModel = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);
