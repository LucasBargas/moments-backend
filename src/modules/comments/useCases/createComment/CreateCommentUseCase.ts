import { IComment } from '../../models/IComment';
import { ICommentRepository } from '../../repositories/ICommentRepository';

interface IRequest {
  name: string;
  text: string;
  momentId: string;
}

class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute({ name, text, momentId }: IRequest): Promise<IComment> {
    if (!name) throw new Error('O nome é obrigatório');
    if (!text) throw new Error('O texto é obrigatório.');

    return await this.commentRepository.createComment({
      name,
      text,
      momentId,
    });
  }
}

export default CreateCommentUseCase;
