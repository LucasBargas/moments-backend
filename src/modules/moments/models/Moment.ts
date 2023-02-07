import { Schema, model } from 'mongoose';
import { IMoment } from './IMoment';

const momentSchema = new Schema<IMoment>(
  {
    uuid: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

const Moment = model<IMoment>('Moment', momentSchema);

export default Moment;
