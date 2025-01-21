import { Router } from 'express';
import { authenticateJWT } from '../../middlewares/auth.middleware';
import * as logController from '../../controllers/log.controller';

const routes = Router();

routes.post('/findAllLogs', authenticateJWT, logController.findAllLogs);
routes.post('/findAllLogsByUser', authenticateJWT, logController.findAllLogsByUser);
routes.post('/findAllLogsByAction', authenticateJWT, logController.findAllLogsByAction);
routes.post('/findAllLogsByObject', authenticateJWT, logController.findAllLogsByObject);
routes.post('/findAllLogsByActionAndObject', authenticateJWT, logController.findAllLogsByActionAndObject);

export default routes;
