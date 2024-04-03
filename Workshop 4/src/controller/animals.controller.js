import { animal as animalValidation } from "../schemas/animal.shema.js";
import { AnimalsService } from "../service/animals.service.js";

export class AnimalsController {
    static async getAllAnimals(req, res) {
        try {
            const animal = await AnimalsService.getAllAnimalsFromTheShelter(req.body)

            res.json(animal)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createAnimal(req, res) {
        try {

            await animalValidation.validateAsync(req.body, {
                abortEarly: false,
            })

            const animal = await AnimalsService.createAnimal(req.body)

            res.json(animal)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
    static async getAnimalById(req, res) {
        try {
            const animal = await AnimalsService.getAnimalById(req.params.id)

            res.json(animal)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async updateAnAnimal(req, res) {
        try {
            const animal = await AnimalsService.updateAnAnimal(req.params.id, req.body)

            res.json(animal)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteAnimalById(req,res){
        try {
            const animal = await AnimalsService.deleteAnimalById(req.params.id)

            res.json(animal)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}