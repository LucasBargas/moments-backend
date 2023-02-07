import MomentRepository from '../../repositories/MomentRepository';
import ListMomentsController from './ListMomentsController';
import ListMomentsUseCase from './ListMomentsUseCase';

const categoriesRepository = new MomentRepository();
const listMomentsUseCase = new ListMomentsUseCase(categoriesRepository);
const listMomentsController = new ListMomentsController(listMomentsUseCase);

export default listMomentsController;
