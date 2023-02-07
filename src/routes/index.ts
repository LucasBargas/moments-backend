import express from 'express';
import momentsRoutes from './momentsRoutes';
import commentsRoutes from './commentsRoutes';

const router = express.Router();

router.use('/moments', momentsRoutes);
router.use('/comments', commentsRoutes);

export default router;
