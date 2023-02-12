import { IComment } from '../models/IComment';
import { ICommentRepository, ICreateCommentDTO } from './ICommentRepository';
import Comment from '../models/Comment';
import MomentRepository from '../../moments/repositories/MomentRepository';
import Moment from '../../moments/models/Moment';
import mongoose from 'mongoose';

class CommentRepository implements ICommentRepository {
  constructor(private momentRepository: MomentRepository) {}
  async createComment({
    uuid,
    name,
    text,
    momentId,
  }: ICreateCommentDTO): Promise<IComment> {
    try {
      const moment = await this.momentRepository.momentById(momentId);

      const comment: IComment = {
        uuid,
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
      const comments = await Comment.find({ momentId }).sort('-createdAt');
      return comments;
    } catch (error) {
      return error;
    }
  }

  async deleteCommentById(uuid: string): Promise<void> {
    try {
      const moments = await Moment.find();

      const momentsFiltered = moments.filter((moment) => {
        return moment.comments.some((moment) => moment.uuid === uuid);
      })[0];

      const objId = new mongoose.Types.ObjectId(momentsFiltered._id);
      const moment = await Moment.findById(objId);

      moment.comments = moment.comments.filter((moment) => {
        return moment.uuid !== uuid;
      });

      await moment.save();
      await Comment.findOneAndDelete({ uuid: uuid });
    } catch (error) {
      return error;
    }
  }
}

export default CommentRepository;
