'use strict';
import { Request, Response } from "express";
import { Comments } from './../models/Comments';
import { Posts } from './../models/Posts';
import { User } from './../models/Users';



export const createArticle = async (req: Request, res: Response) => {

    try {
        const user = req.user;
        const form = req.body;
        const posts = await Posts.create({

            title: form.title,
            content: form.content,
            readTime: form.readTime,
            preview: form.preview,
            like: form.like,
            imageLink: form.imageLink,
            tag: form.tag.split(','),
            // authorId: user._id,
            // author: user.firstName + '' + user.lastName
        });
        await posts.save();
        console.log(posts.save());
        return res.json({ message: "Successfully Created" });
    }
    catch (e) {
        res.json(e);
    }
}

/**
 * update Post
 * Check if current post can be updated or deleted by the authenticated user:
 * The author can only make change to his/her own posts
 */

export const updatePost = async (req: Request, res: Response) => {
    try {
        // const result = validate(req.body);
        // if (result.error) {
        //     res.status(400).json({ message: result.error.details[0].message });
        // }
        const form = req.body;
        const postData = {
            title: form.title,
            content: form.content,
            readTime: form.readTime,
            preview: form.preview,
            imageLink: form.imageLink,
            tag: form.tag,
        }
        console.log(req.params.id);
        const updatePosts = await Posts.findByIdAndUpdate(req.params.id,
            { $set: postData }, { new: true }
        );
        await updatePosts.save();
        // if (!user._id.equals(updatePosts.authorId)) {
        //     res.send({ allowChange: false });
        //     res.save(updatePosts);
        // }
        // res.send({ allowChange: true });
        return res.json({ message: "Post Updated successfully !" });
    }
    catch (e) {
        res.json(e);
    }
}

export const getSinglePost = async (req: Request, res: Response) => {
    try {
        const post = await Posts.findOne({ _id: req.params.id });
        if (!post) {
            res.json({ message: "not found" });
        }
        return res.json(post);
    }
    catch (e) {
        res.json(e);
    }
}


export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Posts.find(res.body);
        if (!posts) {
            return res.json({ message: "Fetching Error OR Post Not found" });
        }
        return res.status(200).json(posts);
    }
    catch{
        res.json({ message: "Something went Wrong" });
    }
}

/**
 * fetch post by user Id
 */

export const fetchPostbyUserId = async (req: Request, res: Response) => {

    try {
        const user = req.user;

        const posts = await Posts.find({ authorId: user._id })
            .select({})
            .limit(100)
            .sort({ createdAt: -1 }).exec();
        if (!posts) {
            res.status(422).json({ message: "Could not retrieve posts." });
        }
        res.json(posts);
    }
    catch{
        res.json({ message: "something went wrong during  " });
    }

}

export const getLatestPost = async (req: Request, res: Response) => {

}

/**
 * Post Deleted with comment 
*/

export const deletePost = async (req: Request, res: Response) => {
    try {
        const post = await Posts.findByIdAndRemove(req.params.id);
        if (!post) {
            return res.json({ message: "Post Id not found with this id" });
        }
        const comment = await Comments.remove({ postId: post._id });
        if (!comment) {
            return res.json({ message: "Comment not found with associated Post Id " });
        }
        res.json({ message: "post Deleted" });
    }
    catch{
        res.json({ message: "Something Went Wrong while deleting Post " });
    }
}



