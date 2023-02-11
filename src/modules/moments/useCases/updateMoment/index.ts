import MomentRepository from '../../repositories/MomentRepository';
import UpdateMomentController from './UpdateMomentController';
import UpdateMomentUseCase from './UpdateMomentUseCase';

const momentRepository = new MomentRepository();
const updateMomentUseCase = new UpdateMomentUseCase(momentRepository);
const updateMomentController = new UpdateMomentController(updateMomentUseCase);

export default updateMomentController;
