import { Schema, model } from 'mongoose';

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    type: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    breed: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    status: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
    }
},
    {
        timestamps: true,
    }
)

const Animal = model('animal', animalSchema);
export default Animal;
