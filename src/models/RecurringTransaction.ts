import { Schema, model, Document } from "mongoose";

export interface IRecurringTransaction extends Document {
  userId: Schema.Types.ObjectId | string;
  title: string;
  amount: number;
  type: "income" | "expense";
  categoryId: Schema.Types.ObjectId | string;
  startDate: Date;
  frequency: "monthly" | "weekly" | "yearly";
  endDate?: Date;
  nextDueDate: Date;
  lastExecutedDate: Date;
  createdAt: Date;
}

const recurringTransactionSchema = new Schema<IRecurringTransaction>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  startDate: { type: Date, required: true },
  frequency: {
    type: String,
    enum: ["monthly", "weekly", "yearly"],
    required: true,
  },
  endDate: { type: Date },
  nextDueDate: { type: Date, required: true },
  lastExecutedDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

const RecurringTransaction = model<IRecurringTransaction>(
  "RecurringTransaction",
  recurringTransactionSchema
);

export default RecurringTransaction;
