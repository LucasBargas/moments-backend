import express, { Request, Response } from 'express';
import createMomentController from '../modules/moments/useCases/createMoment';
import imageUpload from '../middlewares/imageUpload';
import listMomentsController from '../modules/moments/useCases/listMoments';
import momentByIdController from '../modules/moments/useCases/momentById';
import deleteMomentByIdController from '../modules/moments/useCases/deleteMomentById';
import commentAMomentController from '../modules/moments/useCases/commentAMoment';

const router = express.Router();

router.get('/moments/:id', async (req: Request, res: Response) => {
  return await momentByIdController.handle(req, res);
});

router.get('/moments', async (req: Request, res: Response) => {
  return await listMomentsController.handle(req, res);
});

router.delete('/moments/:id', async (req: Request, res: Response) => {
  return await deleteMomentByIdController.handle(req, res);
});

router.patch('/moments/:id', async (req: Request, res: Response) => {
  return await commentAMomentController.handle(req, res);
});

router.post(
  '/moments',
  imageUpload.single('image'),
  async (req: Request, res: Response) => {
    return await createMomentController.handle(req, res);
  },
);

export default router;
