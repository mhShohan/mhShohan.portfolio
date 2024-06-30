import Experience, { IExperience } from "./experience.model";


class ExperienceServices {
  private model = Experience;

  async create(payload: IExperience) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find().sort({ endDate: -1 });
  }
}

const experienceServices = new ExperienceServices();
export default experienceServices;