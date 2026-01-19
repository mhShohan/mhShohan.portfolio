import mongoose, { Schema } from 'mongoose';
import { IJob } from './job.interface';

const jobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
});

const Job = mongoose.model<IJob>('Job', jobSchema);
export default Job;
