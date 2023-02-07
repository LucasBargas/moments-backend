import express, { Request, Response } from 'express';
import createMomentController from '../modules/moments/useCases/createMoment';
import imageUpload from '../middlewares/imageUpload';
import listMomentsController from '../modules/moments/useCases/listMoments';
import momentByIdController from '../modules/moments/useCases/momentById';
import deleteMomentByIdController from '../modules/moments/useCases/deleteMomentById';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  return await momentByIdController.handle(req, res);
});

router.get('/', async (req: Request, res: Response) => {
  return await listMomentsController.handle(req, res);
});

router.delete('/:id', async (req: Request, res: Response) => {
  return await deleteMomentByIdController.handle(req, res);
});

router.post(
  '/',
  imageUpload.single('image'),
  async (req: Request, res: Response) => {
    return await createMomentController.handle(req, res);
  },
);

export default router;
