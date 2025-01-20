import mongoose, { Schema } from "mongoose";

export interface IUserCredential{
    _id: string;
    userId: string;
    password: string;
}

const userCredentialSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const UserCredentialModel = mongoose.model<IUserCredential>("UserCredential", userCredentialSchema);
