import express, { Request, Response } from 'express';
import createCommentController from '../modules/comments/useCases/createComment';

const router = express.Router();

router.post('/:momentId', async (req: Request, res: Response) => {
  return await createCommentController.handle(req, res);
});

export default router;
