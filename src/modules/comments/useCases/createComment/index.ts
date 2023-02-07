import CommentRepository from '../../repositories/CommentRepository';
import CreateCommentController from './CreateCommentController';
import CreateCommentUseCase from './CreateCommentUseCase';

const commentRepository = new CommentRepository();
const createCommentUseCase = new CreateCommentUseCase(commentRepository);
const createCommentController = new CreateCommentController(
  createCommentUseCase,
);

export default createCommentController;
