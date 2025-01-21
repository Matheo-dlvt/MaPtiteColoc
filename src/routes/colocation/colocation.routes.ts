import { Router } from "express";
import * as colocationController from "../../controllers/colocation.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const routes = Router();

routes.post("/create", authenticateJWT, colocationController.createColocation);

routes.get("/findColocationById", authenticateJWT, colocationController.findColocationById);
routes.get("/findColocationByName", authenticateJWT, colocationController.findColocationByName);

routes.delete("/deleteColocationForUser", authenticateJWT, colocationController.deleteColocationForUser);

export default routes;
