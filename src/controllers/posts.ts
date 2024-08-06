import { Request, Response, NextFunction } from "express";
import Post, { IPost } from "../models/posts";

export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts: IPost[] = await Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ message: (err as Error).message })
    }
}

export const createPosts = async (req: Request, res: Response): Promise<void> => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message })
    }
}