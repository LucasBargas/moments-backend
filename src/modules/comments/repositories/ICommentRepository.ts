import { IComment } from '../models/IComment';

export interface ICreateCommentDTO {
  name: string;
  text: string;
  momentId: string;
}

export interface ICommentRepository {
  createComment: ({
    name,
    text,
    momentId,
  }: ICreateCommentDTO) => Promise<IComment>;
}
