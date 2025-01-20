import mongoose, { Schema } from "mongoose";

export interface IUserFinance {
    _id: string;
    colocationId: string;
    userId: string;
    amountToPaid: number;
    totalPaid: number;
}

const userFinanceSchema: Schema = new Schema({
    colocationId: { type: String, required: true },
    userId: { type: String, required: true },
    amountToPaid: { type: Number, required: true },
    totalPaid: { type: Number, required: true },
});

export const UserFinance = mongoose.model<IUserFinance>("UserFinance", userFinanceSchema);
