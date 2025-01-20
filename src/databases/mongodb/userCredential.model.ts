import mongoose, { Schema } from "mongoose";

export interface IUserCredential{
    _id: string;
    userId: string;
    password_hash: string;
}

const userCredentialSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
});

export const UserCredentialModel = mongoose.model<IUserCredential>("UserCredential", userCredentialSchema);
