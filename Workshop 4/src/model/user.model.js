import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    adopterName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    animal: [
        {
            type: Schema.Types.ObjectId,
            ref: 'animals',
        }
    ],
    adoptionDate: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    }
},
    {
        timestamps: true,
    }
)

const User = model('adoptions', userSchema);

export default User;