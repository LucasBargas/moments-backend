import { IMomentRepository } from '../../repositories/IMomentRepository';

class ListMomentUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute() {
    return await this.momentRepository.listMoments();
  }
}

export default ListMomentUseCase;
