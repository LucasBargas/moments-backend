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
  listComments: (momentId: string) => Promise<IComment[]>;
  deleteCommentById: (uuid: string) => Promise<void>;
}
