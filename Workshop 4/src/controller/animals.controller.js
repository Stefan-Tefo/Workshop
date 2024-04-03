import { animal as animalValidation } from "../schemas/animal.shema.js";
import { AnimalsService } from "../service/animals.service.js";

export class AnimalsController {
    static async getAllAnimals(req, res) {
        try {
            const animal = await AnimalsService.getAllAnimalsFromTheShelter(req.body)

            res.send(animal)
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
    static async createAnimal(req, res) {
        try {

            await animalValidation.validateAsync(req.body, {
                abortEarly: false,
            })

            const animal = await AnimalsService.createAnimal(req.body)

            res.send(animal)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error.message });
        }
    }
}