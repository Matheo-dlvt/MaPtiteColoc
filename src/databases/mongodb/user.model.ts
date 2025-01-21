import mongoose, { Schema } from "mongoose";

export interface IUser{
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    isActive: boolean;
    colocations: string[];
}

const userSchema: Schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    colocations: { type: Array, required: true },
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
