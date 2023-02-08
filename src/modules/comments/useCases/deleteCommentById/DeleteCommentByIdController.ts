import { Request, Response } from 'express';
import DeleteCommentByIdUseCase from './DeleteCommentByIdUseCase';

class DeleteCommentByIdController {
  constructor(private deleteCommentByIdUseCase: DeleteCommentByIdUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await this.deleteCommentByIdUseCase.execute(id);

      return res.json({ message: 'Comentário deletado com sucesso.' });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default DeleteCommentByIdController;
