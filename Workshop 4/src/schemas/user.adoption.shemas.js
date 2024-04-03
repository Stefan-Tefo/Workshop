import joi from "joi";

export const user = joi.object({
    adopterName: joi.string().min(3).max(30).required(),
    email: joi.string().min(3).max(30).required(),
    user: joi.array().required(),
    adoptionDate: joi.string().min(1).max(99),
})