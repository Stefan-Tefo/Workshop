import joi from "joi";

const posibleAnimals = [
    "Dog",
    "Cat"
]

const possibleStatus = [
    "Available",
    "Adopted"
]

export const animal = joi.object({
    name: joi.string().min(3).max(30).required(),
    type: joi.string().min(3).max(30).required().valid(...posibleAnimals),
    breed: joi.string().min(3).max(30).required(),
    age: joi.number().min(1).max(99).integer(),
    status: joi.string().required().valid(...possibleStatus),
    description: joi.string().min(1).max(100)
})