import Project, { IProject } from "./project.model";

class ProjectServices {
  private model = Project;

  async create(payload: IProject) {
    return this.model.create(payload);
  }

  async update(id: string, payload: Partial<IProject>) {
    return this.model.findByIdAndUpdate(id, payload);
  }

  async readOne(id: string) {
    return this.model.findById(id);
  }

  async readAll() {
    return this.model.find().sort({ featured: -1 });
  }
}

const projectServices = new ProjectServices();
export default projectServices;