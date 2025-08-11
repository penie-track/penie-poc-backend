import { Schema, model, Document } from "mongoose";

export interface IGoal extends Document {
  userId: Schema.Types.ObjectId | string;
  title: string;
  targetAmount: number;
  savedAmount: number;
  deadline: Date;
  note: string;
  createdAt: Date;
}

const goalSchema = new Schema<IGoal>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  savedAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Goal = model<IGoal>("Goal", goalSchema);
export default Goal;
