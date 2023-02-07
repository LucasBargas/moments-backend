import { Request, Response } from 'express';
import CreateMomentUseCase from './CreateMomentUseCase';

class CreateMomentController {
  constructor(private createMomentUseCase: CreateMomentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;

    try {
      const image = req.file?.filename || null;

      const moment = await this.createMomentUseCase.execute({
        title,
        description,
        image,
      });

      return res
        .status(201)
        .json({ message: 'Momento criado com sucesso!', moment });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CreateMomentController;
