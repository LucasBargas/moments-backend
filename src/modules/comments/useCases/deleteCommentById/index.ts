import CommentRepository from '../../repositories/CommentRepository';
import DeleteCommentByIdController from './DeleteCommentByIdController';
import DeleteCommentByIdUseCase from './DeleteCommentByIdUseCase';

const commentRepository = new CommentRepository();
const deleteCommentByIdUseCase = new DeleteCommentByIdUseCase(
  commentRepository,
);
const deleteCommentByIdController = new DeleteCommentByIdController(
  deleteCommentByIdUseCase,
);

export default deleteCommentByIdController;
