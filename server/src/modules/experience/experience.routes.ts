import { Router } from 'express';
import { z } from 'zod';
import validateRequest from '../../middlewares/validateRequest';
import experienceControllers from './experience.controller';
import verifyAuth from '../../middlewares/verifyAuth';

const experienceValidator = z.object({
  title: z.string(),
  organization: z.string(),
  link: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  responsibilities: z.array(z.string())
});

const experienceRoutes = Router();

experienceRoutes.post('/', verifyAuth, validateRequest(experienceValidator), experienceControllers.create);
experienceRoutes.get('/', experienceControllers.readAll);

export default experienceRoutes;
