import MomentRepository from '../../../moments/repositories/MomentRepository';
import CommentRepository from '../../repositories/CommentRepository';
import CreateCommentController from './CreateCommentController';
import CreateCommentUseCase from './CreateCommentUseCase';

const momentRepository = new MomentRepository();
const commentRepository = new CommentRepository(momentRepository);
const createCommentUseCase = new CreateCommentUseCase(commentRepository);
const createCommentController = new CreateCommentController(
  createCommentUseCase,
);

export default createCommentController;
