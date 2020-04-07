"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var postSchema = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    readTime: {
        type: Number
    },
    preview: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    imageLink: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'media'
    },
    tag: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: String,
    authorId: String,
});
// schema.methods.likes = function (cb) {
//     this.like += 1;
//     this.save(cb);
// }
exports.Posts = mongoose_1.default.model("User", postSchema);
//# sourceMappingURL=Posts.js.map