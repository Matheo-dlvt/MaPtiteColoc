import mongoose, { Schema } from "mongoose";

export interface ILog{
    userId: string;
    userEmail: string;
    colocationName: string;
    action: string;
    object: string;
    validated: boolean;
    date: Date;
}

const logSchema: Schema = new Schema({
    userId: { type: String, required: false, nullable: true },
    userEmail: { type: String, required: false, nullable: true },
    colocationName: { type: String, required: false, nullable: true },
    action: { type: String, required: false, nullable: true },
    object: { type: String, required: false, nullable: true },
    validated: { type: Boolean, required: false, nullable: true },
    date: { type: Date, required: false, nullable: true },
});

export const LogModel = mongoose.model<ILog>("Log", logSchema);
