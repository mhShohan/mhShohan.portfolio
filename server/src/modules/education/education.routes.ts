import { Router } from 'express';
import { z } from 'zod';
import validateRequest from '../../middlewares/validateRequest';
import educationControllers from './education.controller';
import verifyAuth from '../../middlewares/verifyAuth';

const educationValidator = z.object({
  institute: z.string(),
  certificate: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

const educationRoutes = Router();

educationRoutes.post('/', verifyAuth, validateRequest(educationValidator), educationControllers.create);
educationRoutes.get('/', educationControllers.readAll);

export default educationRoutes;
