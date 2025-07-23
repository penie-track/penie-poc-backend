import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  salt: string;
  passwordHash: string;
  name: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, lowercase: true, required: true },
  salt: { type: String },
  createdAt: { default: Date.now, type: Date },
  passwordHash: { type: String },
});

const User = model<IUser>("User", userSchema);
export default User;
