import { Document } from 'mongoose';

export interface IComment {
  name: string;
  text: string;
}

export interface IMoment extends Partial<Document> {
  uuid: string;
  title: string;
  description: string;
  image: string;
  comments?: IComment[];
}
