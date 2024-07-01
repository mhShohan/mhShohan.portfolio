import { Router } from 'express';
import profileControllers from './profile.controller';
import verifyAuth from '../../middlewares/verifyAuth';

const profileRoutes = Router();

profileRoutes.post('/', profileControllers.create);
profileRoutes.post('/login', profileControllers.login);
profileRoutes.get('/', profileControllers.self);
profileRoutes.patch('/', verifyAuth, profileControllers.update);
profileRoutes.get('/analysis', verifyAuth, profileControllers.analysis);

export default profileRoutes;
