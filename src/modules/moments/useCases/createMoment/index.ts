import MomentRepository from '../../repositories/MomentRepository';
import CreateMomentController from './CreateMomentController';
import CreateMomentUseCase from './CreateMomentUseCase';

const momentRepository = new MomentRepository();
const createMomentUseCase = new CreateMomentUseCase(momentRepository);
const createMomentController = new CreateMomentController(createMomentUseCase);

export default createMomentController;
