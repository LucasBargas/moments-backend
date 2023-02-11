import { IMoment } from '../../models/IMoment';
import { IMomentRepository } from '../../repositories/IMomentRepository';

interface IRequest {
  id: string;
  title: string;
  description: string;
  image: string;
}

class UpdateMomentUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute({ id, title, description, image }: IRequest): Promise<IMoment> {
    const momentAlreadyExists = await this.momentRepository.findByTitle(title);

    if (!title) throw new Error('O título é obrigatório');
    if (momentAlreadyExists) throw new Error('Este título já está em uso.');
    if (!description) throw new Error('A descrição é obrigatória.');
    if (!image) throw new Error('Você precisa adicionar uma foto.');

    return await this.momentRepository.updateMoment({
      id,
      title,
      description,
      image,
    });
  }
}

export default UpdateMomentUseCase;
