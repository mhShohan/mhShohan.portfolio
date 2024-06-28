import { Router } from 'express';
import projectControllers from './project.controller';
import verifyAuth from '../../middlewares/verifyAuth';

const projectRoutes = Router();

projectRoutes.post('/', verifyAuth, projectControllers.create);
projectRoutes.get('/', projectControllers.readAll);
projectRoutes.get('/:id', projectControllers.readOne);
projectRoutes.patch('/:id', verifyAuth, projectControllers.update);

export default projectRoutes;
