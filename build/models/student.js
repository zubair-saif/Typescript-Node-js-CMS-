"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//   /app/models/student.ts
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// create a schema
exports.StudentSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    School: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        required: true
    }
});
//# sourceMappingURL=student.js.map