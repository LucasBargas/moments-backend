import { IMoment } from '../../models/IMoment';
import { IMomentRepository } from '../../repositories/IMomentRepository';

interface IRequest {
  id: string;
  name: string;
  comment: string;
}

class CommentAMomentUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute({ id, name, comment }: IRequest): Promise<IMoment> {
    const moment = await this.momentRepository.commentMomentById(id);

    if (!name) throw new Error('Você precisa informar um nome.');
    if (!comment) throw new Error('Você precisa criar um comentário.');

    moment.comments.push({
      name,
      comment,
    });

    await moment.save();

    return moment;
  }
}

export default CommentAMomentUseCase;
