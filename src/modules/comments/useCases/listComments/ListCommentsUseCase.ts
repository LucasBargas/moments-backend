import { IComment } from '../../models/IComment';
import { ICommentRepository } from '../../repositories/ICommentRepository';

interface IRequest {
  momentId: string;
}

class ListCommentsUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute({ momentId }: IRequest): Promise<IComment[]> {
    return await this.commentRepository.listComments(momentId);
  }
}

export default ListCommentsUseCase;
