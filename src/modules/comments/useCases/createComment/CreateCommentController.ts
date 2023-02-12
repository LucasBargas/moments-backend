import { Request, Response } from 'express';
import CreateCommentUseCase from './CreateCommentUseCase';

class CreateCommentController {
  constructor(private createCommentUseCase: CreateCommentUseCase) {}

  async handle(req: Request, res: Response) {
    const { uuid, name, text } = req.body;
    const { momentId } = req.params;

    try {
      const comment = await this.createCommentUseCase.execute({
        uuid,
        name,
        text,
        momentId,
      });

      return res
        .status(201)
        .json({ message: 'Comentário adicionado!', comment });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CreateCommentController;
