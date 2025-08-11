import { Schema, model, Document } from "mongoose";

export interface IDebt extends Document {
  userId: Schema.Types.ObjectId | string;
  title: string;
  amount: number;
  type: "borrowed" | "lent";
  personName: string;
  interestRate?: number;
  emiAmount?: number;
  dueDate: Date;
  paidAmount: number;
  notes: string;
  createdAt: Date;
}

const debtSchema = new Schema<IDebt>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["borrowed", "lent"], required: true },
  personName: { type: String, required: true },
  interestRate: { type: Number },
  emiAmount: { type: Number },
  dueDate: { type: Date, required: true },
  paidAmount: { type: Number, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Debt = model<IDebt>("Debt", debtSchema);
export default Debt;
