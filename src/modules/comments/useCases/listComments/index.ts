import CommentRepository from '../../repositories/CommentRepository';
import ListCommentsController from './ListCommentsController';
import ListCommentsUseCase from './ListCommentsUseCase';

const commentRepository = new CommentRepository();
const listCommentsUseCase = new ListCommentsUseCase(commentRepository);
const listCommentController = new ListCommentsController(listCommentsUseCase);

export default listCommentController;
