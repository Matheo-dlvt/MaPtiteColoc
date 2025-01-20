import { Router } from "express";
import * as colocationController from "../../controllers/colocation.controller";

const routes = Router();

routes.get("/", colocationController.getAllColocations);

routes.post("/create", colocationController.createColocation);

routes.get("/:id", colocationController.getColocationById);

routes.put("/:id", colocationController.updateColocation);

routes.delete("/:id", colocationController.deleteColocation);

export default routes;
