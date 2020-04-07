"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var commentsSchema = new mongoose_1.default.Schema({
    author: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now()
    },
    postId: String,
    authorId: String,
});
exports.Comments = mongoose_1.default.model("comments", commentsSchema);
//# sourceMappingURL=Comments.js.map