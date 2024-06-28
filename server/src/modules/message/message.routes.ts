import { Router } from 'express';
import { z } from 'zod';
import validateRequest from '../../middlewares/validateRequest';
import messageControllers from './message.controller';

const messageValidator = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

const messageRoutes = Router();

messageRoutes.post('/', validateRequest(messageValidator), messageControllers.create);
messageRoutes.get('/', messageControllers.readAll);

export default messageRoutes;
