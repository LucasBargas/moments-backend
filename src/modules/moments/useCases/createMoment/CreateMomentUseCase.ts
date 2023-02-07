import { IMomentRepository } from '../../repositories/IMomentRepository';

interface IRequest {
  title: string;
  description: string;
  image: string;
}

class CreateMomentUseCase {
  constructor(private momentRepository: IMomentRepository) {}

  async execute({ title, description, image }: IRequest) {
    const momentAlreadyExists = await this.momentRepository.findByTitle(title);

    if (!title) throw new Error('O título é obrigatório');
    if (momentAlreadyExists) throw new Error('Este título já está em uso.');
    if (!description) throw new Error('A descrição é obrigatória.');
    if (!image) throw new Error('Você precisa adicionar uma foto.');

    return await this.momentRepository.createMoment({
      title,
      description,
      image,
    });
  }
}

export default CreateMomentUseCase;
