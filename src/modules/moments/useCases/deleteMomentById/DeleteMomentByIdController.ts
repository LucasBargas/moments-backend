import { Request, Response } from 'express';
import DeleteMomentByIdUseCase from './DeleteMomentByIdUseCase';

class DeleteMomentByIdController {
  constructor(private deleteMomentByIdUseCase: DeleteMomentByIdUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.deleteMomentByIdUseCase.execute(id);

    return res.json({ message: 'Moment deletado com sucesso.' });
  }
}

export default DeleteMomentByIdController;
