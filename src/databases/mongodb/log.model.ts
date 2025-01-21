import mongoose, { Schema } from "mongoose";

export interface ILog{
    _id: string;
    userId: string;
    action: string;
    object: string;
    validated: boolean;
    date: Date;
}

const logSchema: Schema = new Schema({
    userId: { type: String, required: true },
    action: { type: String, required: true },
    object: { type: String, required: true },
    validated: { type: Boolean, required: true },
    date: { type: Date, required: true },
});

export const LogModel = mongoose.model<ILog>("Log", logSchema);
