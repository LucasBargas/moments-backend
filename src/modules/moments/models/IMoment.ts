import { Document } from 'mongoose';

interface IComment {
  name: string;
  comment: string;
}

export interface IMoment extends Partial<Document> {
  uuid: string;
  title: string;
  description: string;
  image: string;
  name?: string;
  comment?: string;
  comments?: IComment[];
}
