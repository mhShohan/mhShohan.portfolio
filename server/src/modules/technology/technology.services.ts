import Technology, { ITechnology } from "./technology.model";

class TechnologyServices {
  private model = Technology;

  async create(payload: ITechnology) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find();
  }
}

const technologyServices = new TechnologyServices();
export default technologyServices;