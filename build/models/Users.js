"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
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
exports.User = mongoose_1.default.model("Users", userSchema);
// module.exports.validate = validate;
//# sourceMappingURL=Users.js.map