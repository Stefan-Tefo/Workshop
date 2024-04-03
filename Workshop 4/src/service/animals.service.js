import Animal from "../model/animal.model.js";

export class AnimalsService {
    static async getAllAnimalsFromTheShelter(body) {
        return Animal.find(body)
    }
    static async createAnimal(body) {
        const newAnimal = new Animal(body)

        return newAnimal.save()
    }
}