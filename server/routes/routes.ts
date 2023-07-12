import { Router } from "express";
import { firstController } from "../controllers/controllers.routes.ts";

const router = Router();

router.get("/", firstController)

export default router;