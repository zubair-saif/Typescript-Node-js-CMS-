import mongoose from "mongoose";
import * as Joi from '@hapi/joi'


export type CommentsDocument = mongoose.Document & {

    author: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    time: {
        type: Date,

    },
    postId: String,
    authorId: String,


};

const commentsSchema = new mongoose.Schema({

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

export const Comments = mongoose.model<CommentsDocument>("comments", commentsSchema);



