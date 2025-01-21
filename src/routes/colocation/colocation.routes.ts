import { Router } from "express";
import * as colocationController from "../../controllers/colocation.controller";
import { authenticateJWT } from "../../middlewares/auth.middleware";

const routes = Router();

routes.post("/create", authenticateJWT, colocationController.createColocation);

routes.post("/findColocationById", authenticateJWT, colocationController.findColocationById);
routes.post("/findColocationByName", authenticateJWT, colocationController.findColocationByName);

// routes.delete("/deleteColocationForUser", authenticateJWT, colocationController.deleteColocationForUser);

routes.put("/update", authenticateJWT, colocationController.updateColocation);

export default routes;
