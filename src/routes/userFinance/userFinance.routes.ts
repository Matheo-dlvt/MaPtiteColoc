import { Router } from "express";
import * as userFinanceController from "../../controllers/userFinance.controller";

const router = Router();

router.post("/userFinance", userFinanceController.createUserFinance);
router.put("/userFinance", userFinanceController.saveUserFinance);
router.get("/userFinance/:userId", userFinanceController.getUserFinanceByUserId);
router.get("/userFinance/:colocationId", userFinanceController.getUserFinanceByColocationId);
router.put("/userFinance/:userFinanceId", userFinanceController.updateUserFinance);
router.delete("/userFinance/:userFinanceId", userFinanceController.deleteUserFinance);

export default router;
