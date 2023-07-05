import { Router } from "express";
import { firstController } from "../controllers/controllers.routes";

const router = Router();

router.get("/", firstController)

export default router;