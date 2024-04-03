import Animal from "../model/animal.model.js";

export class AnimalsService {
    static async getAllAnimalsFromTheShelter(body) {
        return Animal.find(body)
    }
    static async createAnimal(body) {
        const newAnimal = new Animal(body)

        return newAnimal.save()
    }
    static async getAnimalById(id) {
        return Animal.findById(id)
    }
    static async updateAnAnimal(id, { name }) {

        return Animal.findByIdAndUpdate(id, { name }, { new: true })
    }
    static async deleteAnimalById(id){
        return Animal.findByIdAndDelete(id)
    }
}