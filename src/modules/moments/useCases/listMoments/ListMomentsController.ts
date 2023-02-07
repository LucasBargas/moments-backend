import { Request, Response } from 'express';
import ListMomentsUseCase from './ListMomentsUseCase';

class ListMomentsController {
  constructor(private listMomentsUseCase: ListMomentsUseCase) {}

  async handle(req: Request, res: Response) {
    const moments = await this.listMomentsUseCase.execute();

    return res.status(201).json(moments);
  }
}

export default ListMomentsController;
