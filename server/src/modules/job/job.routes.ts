import { Router } from 'express';
import jobControllers from './job.controllers';

const jobRoutes = Router();

jobRoutes.get('/', jobControllers.readAll);
jobRoutes.post('/', jobControllers.create);

export default jobRoutes;
