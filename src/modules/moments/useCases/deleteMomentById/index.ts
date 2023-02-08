import MomentRepository from '../../repositories/MomentRepository';
import DeleteMomentByIdController from './DeleteMomentByIdController';
import DeleteMomentByIdUseCase from './DeleteMomentByIdUseCase';

const momentRepository = new MomentRepository();
const deleteMomentByIdUseCase = new DeleteMomentByIdUseCase(momentRepository);
const deleteMomentByIdController = new DeleteMomentByIdController(
  deleteMomentByIdUseCase,
);

export default deleteMomentByIdController;
