import { Schema, model } from "mongoose";

export interface IMessage {
  name: string;
  email: string;
  message: string;
  read: boolean;
}

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false }
}, { timestamps: true });


const Message = model<IMessage>('Message', schema);
export default Message;