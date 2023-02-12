import { Document } from 'mongoose';

export interface ICommentList {
  uuid: string;
  name: string;
  text: string;
}

export interface IMoment extends Partial<Document> {
  uuid: string;
  title: string;
  description: string;
  image: string;
  comments: ICommentList[];
}
