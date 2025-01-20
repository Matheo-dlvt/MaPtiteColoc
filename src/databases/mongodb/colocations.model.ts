import mongoose, { Schema, Document } from "mongoose";
import { Double } from "typeorm";

export interface IColocation extends Document {
  name: string;
  adress: string;
  surface: number;
  roomsNumber: number;
  rentPerPerson: number;
}

const ColocationSchema: Schema = new Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true },
  surface: { type: Double, required: true },
  roomsNumber: { type: Number, required: true },
  rentPerPerson: { type: Number, required: true },
});

export const Colocation = mongoose.model<IColocation>("Colocations", ColocationSchema);
