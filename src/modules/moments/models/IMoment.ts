import { Document } from 'mongoose';

export interface IMoment extends Partial<Document> {
  uuid: string;
  title: string;
  description: string;
  image: string;
}
