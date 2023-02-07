import MomentRepository from '../../repositories/MomentRepository';
import CreateMomentController from './CreateMomentController';
import CreateMomentUseCase from './CreateMomentUseCase';

const categoriesRepository = new MomentRepository();
const createMomentUseCase = new CreateMomentUseCase(categoriesRepository);
const createMomentController = new CreateMomentController(createMomentUseCase);

export default createMomentController;
