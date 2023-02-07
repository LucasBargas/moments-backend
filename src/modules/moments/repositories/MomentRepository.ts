import mongoose from 'mongoose';
import { IMoment } from '../models/IMoment';
import Moment from '../models/Moment';
import { ICreateMomentDTO, IMomentRepository } from './IMomentRepository';
import { v4 as uuidv4 } from 'uuid';

class MomentRepository implements IMomentRepository {
  async createMoment({
    title,
    description,
    image,
  }: ICreateMomentDTO): Promise<IMoment> {
    try {
      const moment: IMoment = {
        title,
        description,
        image,
        uuid: uuidv4(),
      };

      await Moment.create(moment);
      return moment;
    } catch (error) {
      return error;
    }
  }

  async listMoments(): Promise<IMoment[]> {
    try {
      const moments = await Moment.find().sort('-createdAt');
      return moments;
    } catch (error) {
      return error;
    }
  }

  async momentById(id: string): Promise<IMoment> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const moment = await Moment.findById(objId);
      return moment;
    } catch (error) {
      return error;
    }
  }

  async deleteMomentById(id: string): Promise<void> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      await Moment.findByIdAndDelete(objId);
    } catch (error) {
      return error;
    }
  }

  async commentMomentById(id: string): Promise<IMoment> {
    return await this.momentById(id);
  }

  async findByTitle(title: string): Promise<IMoment> {
    try {
      const moment = await Moment.findOne({ title });
      return moment;
    } catch (error) {
      return error;
    }
  }
}

export default MomentRepository;
