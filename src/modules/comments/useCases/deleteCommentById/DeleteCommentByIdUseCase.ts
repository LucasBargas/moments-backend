import { ICommentRepository } from '../../repositories/ICommentRepository';

class DeleteCommentByIdUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(id: string): Promise<void> {
    await this.commentRepository.deleteCommentById(id);
  }
}

export default DeleteCommentByIdUseCase;
