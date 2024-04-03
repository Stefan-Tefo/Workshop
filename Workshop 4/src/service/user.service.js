import User from "../model/user.model.js"

export class AdoptionService {
    static async createUser({ animal }, id) {
        const user = {
            animal: [...animal, id]
        }
        const newUser = new User(body)
        return newUser.save()
    }
    static async getAllUsers(body) {
        return User.find(body)
    }
}