import { Schema, model } from "mongoose";

export interface IBlog {
  title: string;
  cover: string;
  text: boolean;
}

const schema = new Schema({
  title: { type: String, required: true, unique: true, trim: true },
  cover: { type: String, required: true },
  text: { type: Boolean, required: true },
}, { timestamps: true });


const Blog = model<IBlog>('Blog', schema);
export default Blog;