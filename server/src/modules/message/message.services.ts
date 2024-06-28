import Message, { IMessage } from "./message.model";

class MessageServices {
  private model = Message;

  async create(payload: IMessage) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find();
  }
}

const messageServices = new MessageServices();
export default messageServices;