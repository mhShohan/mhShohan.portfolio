import { Schema, model } from "mongoose";

interface ITechnology {
  _id: string;
  name: string;
  image: string;
}

export interface IProfile {
  name: string;
  email: string;
  password: string;
  title: string;
  bio: string;
  description: string;
  interestedIn: string;
  socialLinks: {
    github: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    leetcode: string;
    gitLab: string;
  };
  resume: string;
  techStacks: {
    languages: ITechnology[];
    databases: ITechnology[];
    backend: ITechnology[];
    frontend: ITechnology[];
    tools: ITechnology[];
  };
  contactNo: string;
  address: string;
  viewPersonalInterest: boolean;
}

const techSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
}, { _id: false });

const schema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, required: true },
  description: { type: String, required: true },
  interestedIn: { type: String },
  socialLinks: {
    github: { type: String },
    linkedin: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    leetcode: { type: String },
    gitLab: { type: String },
  },
  resume: { type: String, required: true },
  techStacks: {
    languages: [{ type: techSchema }],
    databases: [{ type: techSchema }],
    backend: [{ type: techSchema }],
    frontend: [{ type: techSchema }],
    tools: [{ type: techSchema }],
  },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
  viewPersonalInterest: { type: Boolean, required: true },
}, { timestamps: true });


const Profile = model<IProfile>('profile', schema);
export default Profile;