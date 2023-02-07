import { IMoment } from '../models/IMoment';

export interface ICreateMomentDTO {
  title: string;
  description: string;
  image: string;
}

export interface IMomentRepository {
  createMoment: ({
    title,
    description,
    image,
  }: ICreateMomentDTO) => Promise<IMoment>;
  findByTitle: (title: string) => Promise<IMoment>;
  listMoments: () => Promise<IMoment[]>;
  momentById: (id: string) => Promise<IMoment>;
  deleteMomentById: (id: string) => Promise<void>;
}
