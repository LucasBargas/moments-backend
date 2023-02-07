import { Request, Response } from 'express';
import CommentAMomentUseCase from './CommentAMomentUseCase';

class CommentAMomentController {
  constructor(private commentAMomentUseCase: CommentAMomentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, comment } = req.body;
    const { id } = req.params;

    try {
      const moment = await this.commentAMomentUseCase.execute({
        id,
        name,
        comment,
      });

      return res
        .status(201)
        .json({ message: 'Momento atualizado com sucesso!', moment });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CommentAMomentController;
