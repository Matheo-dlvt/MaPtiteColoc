import mongoose, { Schema } from "mongoose";

export interface IColocation{
    _id: string;
    name: string;
    adress: string;
    surface: number;
    rent: number;
    usersIds: string[];
    totalAmount: number;
}

const colocationSchema: Schema = new Schema({
    name: { type: String, required: true },
    adress: { type: String, required: true },
    surface: { type: Number, required: true },
    rent: { type: Number, required: true },
    usersIds: { type: Array, required: true },
    totalAmount: { type: Number, required: false },
});

export const Colocation = mongoose.model<IColocation>("Colocation", colocationSchema);
