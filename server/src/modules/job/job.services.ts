import { IJob } from './job.interface';
import Job from './job.model';

class JobServices {
  private model = Job;

  async create(payload: IJob) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find();
  }

  async readSingle(id: string) {
    return this.model.findById(id);
  }
}

const jobServices = new JobServices();
export default jobServices;
