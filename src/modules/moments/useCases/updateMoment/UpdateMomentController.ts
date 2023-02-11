import { Request, Response } from 'express';
import UpdateMomentUseCase from './UpdateMomentUseCase';

class UpdateMomentController {
  constructor(private updateMomentUseCase: UpdateMomentUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;
    const image = req.file?.filename || null;

    try {
      const moment = await this.updateMomentUseCase.execute({
        id,
        title,
        description,
        image,
      });

      return res
        .status(201)
        .json({ message: 'Momento atualizado com sucesso!', moment });
    } catch (error) {
      res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default UpdateMomentController;
