import { IMoment } from '../../models/IMoment';
import { IMomentRepository } from '../../repositories/IMomentRepository';

interface IRequest {
  title: string;
  description: string;
  image: string;
}

class CreateMomentUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute({ title, description, image }: IRequest): Promise<IMoment> {
    const momentAlreadyExists = await this.momentRepository.findByTitle(title);

    if (!title) throw new Error('O título é obrigatório');
    if (!description) throw new Error('A descrição é obrigatória.');
    if (!image) throw new Error('Você precisa adicionar uma foto.');
    if (momentAlreadyExists) throw new Error('Este título já está em uso.');

    return await this.momentRepository.createMoment({
      title,
      description,
      image,
    });
  }
}

export default CreateMomentUseCase;
