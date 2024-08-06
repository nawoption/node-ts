import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
    title: string,
    content: string
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

const Post = mongoose.model<IPost>('Post', PostSchema)

export default Post;