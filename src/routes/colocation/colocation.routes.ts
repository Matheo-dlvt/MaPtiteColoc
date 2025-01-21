import { Router } from "express";
import * as colocationController from "../../controllers/colocation.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const routes = Router();

routes.post("/create", authenticateJWT, colocationController.createColocation);

export default routes;
