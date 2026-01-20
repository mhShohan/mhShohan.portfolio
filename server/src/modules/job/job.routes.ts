import { Router } from 'express';
import jobControllers from './job.controllers';

const jobRoutes = Router();

jobRoutes.get('/', jobControllers.readAll);
jobRoutes.post('/', jobControllers.create);
jobRoutes.delete('/:id', jobControllers.deleteOne);
jobRoutes.patch('/:id', jobControllers.updateOne);

export default jobRoutes;
