import { Router } from "express";
import { router as animalRouter } from "../route/animal.route.js";
export const router = Router();

router.use("/shelter", animalRouter);
