import MomentRepository from '../../repositories/MomentRepository';
import CommentAMomentController from './CommentAMomentController';
import CommentAMomentUseCase from './CommentAMomentUseCase';

const categoriesRepository = new MomentRepository();
const commentAMomentUseCase = new CommentAMomentUseCase(categoriesRepository);
const commentAMomentController = new CommentAMomentController(
  commentAMomentUseCase,
);

export default commentAMomentController;
