import { Router } from "express";
import { AnimalsController } from "../controller/animals.controller.js";

export const router = Router();

router.get("/animals", AnimalsController.getAllAnimals);
router.post("/animals", AnimalsController.createAnimal)