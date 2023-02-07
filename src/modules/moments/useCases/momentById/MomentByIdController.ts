import { Request, Response } from 'express';
import MomentByIdUseCase from './MomentByIdUseCase';

class MomentByIdController {
  constructor(private momentByIdUseCase: MomentByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const moment = await this.momentByIdUseCase.execute(id);

    return res.status(201).json(moment);
  }
}

export default MomentByIdController;
