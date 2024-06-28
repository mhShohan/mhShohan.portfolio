import { Schema, model } from "mongoose";

export interface IEducation {
  institute: string;
  certificate: string;
  startDate: string;
  endDate: string;
}

const schema = new Schema({
  institute: { type: String, required: true },
  certificate: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
}, { timestamps: true });


const Education = model<IEducation>('education', schema);
export default Education;