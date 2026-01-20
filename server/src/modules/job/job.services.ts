import { IJob } from './job.interface';
import Job from './job.model';

class JobServices {
  private model = Job;

  async create(payload: IJob) {
    return this.model.create(payload);
  }

  async readAll() {
    return this.model.find().sort({ createdAt: 1 });
  }

  async readSingle(id: string) {
    return this.model.findById(id);
  }

  async deleteOne(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async updateOne(id: string, payload: Partial<IJob>) {
    return this.model.findByIdAndUpdate(id, payload, { new: true });
  }
}

const jobServices = new JobServices();
export default jobServices;
