import { user as adoptionUser } from "../schemas/user.adoption.shemas.js"
import { AdoptionService } from "../service/user.service.js"

export class AdoptionController {
    static async createUser(req, res) {
        try {

            await adoptionUser.validateAsync(req.body, {
                abortEarly: false,
            })

            const user = await AdoptionService.createUser(req.body, req.params.id)// bez id raboti

            res.json(user)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
    static async getAllUsers(req, res) {
        try {
            const user = await AdoptionService.getAllUsers(req.body)

            res.json(user)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
}