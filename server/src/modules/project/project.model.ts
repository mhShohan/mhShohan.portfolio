import { Schema, model } from "mongoose";

interface ITechnology {
  _id: string;
  name: string;
  image: string;
}

export interface IProject {
  name: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Full-stack';
  featured: boolean;
  features: string[];
  technologies: ITechnology[];
  cover: string;
  repositoryLink: {
    source_code: string;
    client_side_code: string;
    server_side_code: string;
  };
  liveSiteLink: string;
}

const techSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
}, { _id: false });

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: ['Frontend', 'Backend', 'Full-stack'] },
  featured: { type: Boolean, default: false },
  features: [{ type: String }],
  technologies: [{ type: techSchema }],
  cover: { type: String, required: true },
  repositoryLink: {
    source_code: { type: String },
    client_side_code: { type: String },
    server_side_code: { type: String },
  },
  liveSiteLink: { type: String, required: true },
}, { timestamps: true });


const Project = model<IProject>('Project', schema);
export default Project;