import { Router } from 'express';
import { z } from 'zod';
import validateRequest from '../../middlewares/validateRequest';
import technologyControllers from './technology.controller';
import verifyAuth from '../../middlewares/verifyAuth';

const technologyValidator = z.object({
  name: z.string(),
  image: z.string(),
});

const technologyRoutes = Router();

technologyRoutes.post('/', verifyAuth, validateRequest(technologyValidator), technologyControllers.create);
technologyRoutes.get('/', technologyControllers.readAll);

export default technologyRoutes;
