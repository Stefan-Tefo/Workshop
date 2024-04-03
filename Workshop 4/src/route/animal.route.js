import { Router } from "express";
import { AnimalsController } from "../controller/animals.controller.js";
import { AdoptionController } from "../controller/adoption.controller.js";

export const router = Router();

router.get("/animals", AnimalsController.getAllAnimals);
router.post("/animals", AnimalsController.createAnimal);
router.get("/animals/:id", AnimalsController.getAnimalById);
router.put("/animals/:id", AnimalsController.updateAnAnimal);
router.delete("/animals/:id", AnimalsController.deleteAnimalById);

router.post("/adoptions/:id",AdoptionController.createUser)//"/adoptions" vaka raboti
router.get("/adoptions",AdoptionController.getAllUsers)

