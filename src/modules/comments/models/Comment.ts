import { Schema, model } from 'mongoose';
import { IComment } from './IComment';

const commentSchema = new Schema<IComment>(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
    momentId: { type: String, required: true },
  },
  { timestamps: true },
);

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
