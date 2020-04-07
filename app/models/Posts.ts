import mongoose from "mongoose";
import * as Joi from '@hapi/joi'


export type PostDocument = mongoose.Document & {

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

const postSchema = new mongoose.Schema({

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
        type: mongoose.Schema.Types.ObjectId,
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

export const Posts = mongoose.model<PostDocument>("posts", postSchema);