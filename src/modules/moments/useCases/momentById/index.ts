import MomentRepository from '../../repositories/MomentRepository';
import MomentByIdController from './MomentByIdController';
import MomentByIdUseCase from './MomentByIdUseCase';

const categoriesRepository = new MomentRepository();
const momentByIdUseCase = new MomentByIdUseCase(categoriesRepository);
const momentByIdController = new MomentByIdController(momentByIdUseCase);

export default momentByIdController;
