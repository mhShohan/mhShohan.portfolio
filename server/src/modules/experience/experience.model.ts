import { Schema, model } from "mongoose";

export interface IExperience {
  title: string;
  organization: string;
  link: string;
  responsibilities: string[];
  startDate: Date;
  endDate: Date;
}

const schema = new Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  link: { type: String, required: true },
  responsibilities: { type: [ String ], required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
}, { timestamps: true });


const Experience = model<IExperience>('Experience', schema);
export default Experience;