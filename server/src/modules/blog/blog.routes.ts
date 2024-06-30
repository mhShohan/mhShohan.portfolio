import { Router } from 'express';
import { z } from 'zod';
import validateRequest from '../../middlewares/validateRequest';
import verifyAuth from '../../middlewares/verifyAuth';
import blogControllers from './blog.controller';

const blogValidator = z.object({
  title: z.string(),
  cover: z.string(),
  text: z.string(),
});

const blogRoutes = Router();

blogRoutes.post('/', verifyAuth, validateRequest(blogValidator), blogControllers.create);
blogRoutes.get('/', blogControllers.readAll);

export default blogRoutes;
