import express, { Request, Response } from 'express';
import createCommentController from '../modules/comments/useCases/createComment';
import listCommentController from '../modules/comments/useCases/listComments';

const router = express.Router();

router.get('/:momentId', async (req: Request, res: Response) => {
  return await listCommentController.handle(req, res);
});

router.post('/:momentId', async (req: Request, res: Response) => {
  return await createCommentController.handle(req, res);
});

export default router;
