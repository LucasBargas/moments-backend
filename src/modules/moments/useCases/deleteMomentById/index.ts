import MomentRepository from '../../repositories/MomentRepository';
import DeleteMomentByIdController from './DeleteMomentByIdController';
import DeleteMomentByIdUseCase from './DeleteMomentByIdUseCase';

const categoriesRepository = new MomentRepository();
const deleteMomentByIdUseCase = new DeleteMomentByIdUseCase(
  categoriesRepository,
);
const deleteMomentByIdController = new DeleteMomentByIdController(
  deleteMomentByIdUseCase,
);

export default deleteMomentByIdController;
