import { IJob } from './job.interface';
import Job from './job.model';

class JobServices {
  private model = Job;

  async create(payload: IJob) {
    return this.model.create(payload);
  }

  async readAll(query: Record<string, unknown>) {
    const { searchTerm, page = 1, limit = 10 } = query;
    const andConditions = [];

    const skip = (Number(page) - 1) * Number(limit);

    if (searchTerm) {
      andConditions.push({
        $or: [
          { title: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { company: { $regex: searchTerm, $options: 'i' } },
        ],
      });
    }

    const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};

    const total = await this.model.countDocuments(whereCondition);
    const data = await this.model
      .find(whereCondition)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: 1 });

    return {
      total,
      data,
      page: Number(page),
      limit: Number(limit),
      totalPage: Math.ceil(total / Number(limit)),
    };
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
