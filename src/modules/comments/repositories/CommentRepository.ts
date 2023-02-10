import { IComment } from '../models/IComment';
import { ICommentRepository, ICreateCommentDTO } from './ICommentRepository';
import { v4 as uuidv4 } from 'uuid';
import Comment from '../models/Comment';
import mongoose from 'mongoose';
import MomentRepository from '../../moments/repositories/MomentRepository';

class CommentRepository implements ICommentRepository {
  constructor(private momentRepository: MomentRepository) {}
  async createComment({
    name,
    text,
    momentId,
  }: ICreateCommentDTO): Promise<IComment> {
    try {
      const moment = await this.momentRepository.momentById(momentId);

      const comment: IComment = {
        uuid: uuidv4(),
        name,
        text,
        momentId,
      };

      moment.comments.push(comment);

      await moment.save();
      await Comment.create(comment);
      return comment;
    } catch (error) {
      return error;
    }
  }

  async listComments(momentId: string): Promise<IComment[]> {
    try {
      const comments = await Comment.find({ momentId });
      return comments;
    } catch (error) {
      return error;
    }
  }

  async deleteCommentById(id: string): Promise<void> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      await Comment.findByIdAndDelete(objId);
    } catch (error) {
      return error;
    }
  }
}

export default CommentRepository;
