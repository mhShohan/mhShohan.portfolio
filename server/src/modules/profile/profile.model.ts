import { Schema, model } from "mongoose";

interface ITechnology {
  _id: string;
  name: string;
  image: string;
  isDeleted?: boolean;
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
  expertiseStack: {
    expertise: ITechnology[];
    comfortable: ITechnology[];
    familiar: ITechnology[];
  },
  contactNo: string;
  address: string;
  viewPersonalInterest: boolean;
  showTechStack: boolean;
  showExpertiseStack: boolean;
}

const techSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  image: { type: String },
  isDeleted: { type: Boolean },
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
  expertiseStack: {
    expertise: [{ type: techSchema }],
    comfortable: [{ type: techSchema }],
    familiar: [{ type: techSchema }],
  },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
  viewPersonalInterest: { type: Boolean, required: true },
  showTechStack: { type: Boolean, default: false },
  showExpertiseStack: { type: Boolean, default: false },
}, { timestamps: true });


const Profile = model<IProfile>('profile', schema);
export default Profile;