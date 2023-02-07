import { IMomentRepository } from '../../repositories/IMomentRepository';

class MomentByIdUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute(id: string) {
    return await this.momentRepository.momentById(id);
  }
}

export default MomentByIdUseCase;
