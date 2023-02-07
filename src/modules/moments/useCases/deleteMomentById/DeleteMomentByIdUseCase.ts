import { IMomentRepository } from '../../repositories/IMomentRepository';

class DeleteMomentByIdUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute(id: string): Promise<void> {
    await this.momentRepository.deleteMomentById(id);
  }
}

export default DeleteMomentByIdUseCase;
