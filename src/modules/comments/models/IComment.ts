import { Document } from 'mongoose';

export interface IComment extends Partial<Document> {
  uuid: string;
  name: string;
  text: string;
  momentId: string;
}
