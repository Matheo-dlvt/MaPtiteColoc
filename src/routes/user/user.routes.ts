import { Router } from 'express';

import * as userController from "../../controllers/user.controller";
import { authenticateJWT } from '../../middlewares/auth.middleware';

const routes = Router();

routes.post("/register", userController.registerUser);
routes.post("/login", userController.loginUser);
routes.post("/refresh-token", userController.refreshToken);

routes.get("/me", authenticateJWT, userController.getMe);

routes.delete("/deleteMe", authenticateJWT, userController.deleteMe);

export default routes;
