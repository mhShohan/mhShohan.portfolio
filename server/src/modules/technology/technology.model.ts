import { Schema, model } from "mongoose";

export interface ITechnology {
  name: string;
  image: string;
  isDeleted: boolean;
}

const technologySchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  image: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });


const Technology = model<ITechnology>('Technology', technologySchema);
export default Technology;