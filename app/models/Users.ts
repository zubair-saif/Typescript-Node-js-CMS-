import mongoose from "mongoose";
import * as Joi from '@hapi/joi'

export type UserDocument = mongoose.Document & {

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    occupation: {
        type: String
    },
    bio: {
        type: String
    },


};

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    occupation: {
        type: String
    },
    bio: {
        type: String
    },

});

// function validate(users) {
//     const userSchema = {
//         firstName: Joi.string().optional(),
//         lastName: Joi.string().optional(),
//         email: Joi.string().email().required(),
//         phone: Joi.number().required(),
//         password: Joi.string().required(),
//         bio: Joi.string().optional(),
//         city: Joi.string().optional(),
//         Occupation: Joi.string().optional(),
//     }
//     return Joi.validate(users, userSchema);
// }

// module.exports.getUserById = async (id, callback) => {
//     await Users.findById(id, callback);
// };

export const User = mongoose.model<UserDocument>("Users", userSchema);
// module.exports.validate = validate;

