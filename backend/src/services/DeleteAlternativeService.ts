import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Alternative from '../models/Alternative';

class DeleteAlternativeService {
    public async execute(id: string): Promise<void> {
        const alternativeRepository = getRepository(Alternative);

        const alternative = await alternativeRepository.findOne(id);

        if (!alternative) {
            throw new AppError('Question does not exists');
          }

        await alternativeRepository.remove(alternative);
    }
}

export default DeleteAlternativeService;