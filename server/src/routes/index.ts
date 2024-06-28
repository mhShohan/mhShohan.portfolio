import { Router } from 'express';
import technologyRoutes from '../modules/technology/technology.routes';
import educationRoutes from '../modules/education/education.routes';
import experienceRoutes from '../modules/experience/experience.routes';
import profileRoutes from '../modules/profile/profile.routes';
import projectRoutes from '../modules/project/project.routes';
import messageRoutes from '../modules/message/message.routes';

const rootRoutes = Router();

rootRoutes.use('/technologies', technologyRoutes);
rootRoutes.use('/educations', educationRoutes);
rootRoutes.use('/experiences', experienceRoutes);
rootRoutes.use('/profile', profileRoutes);
rootRoutes.use('/projects', projectRoutes);
rootRoutes.use('/messages', messageRoutes);

export default rootRoutes;
