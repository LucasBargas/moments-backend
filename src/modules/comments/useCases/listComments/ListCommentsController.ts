import { Request, Response } from 'express';
import ListCommentsUseCase from './ListCommentsUseCase';

class ListCommentsController {
  constructor(private listCommentsUseCase: ListCommentsUseCase) {}

  async handle(req: Request, res: Response) {
    const { momentId } = req.params;
    const comments = await this.listCommentsUseCase.execute({ momentId });

    return res.status(201).json(comments);
  }
}

export default ListCommentsController;
