import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password_hash: string;
  birthdate: Date;
  isActive: boolean;
}

const UserSchema: Schema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },

  birthdate: { type: Date, required: true },

  isActive: { type: Boolean, default: true },
});

export const User = mongoose.model<IUser>("User", UserSchema);
