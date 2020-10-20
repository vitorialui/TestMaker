import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Question from '../models/Question';

class DeleteQuestionService {
    public async execute(id: string): Promise<void> {
        const questionRepository = getRepository(Question);

        const question = await questionRepository.findOne(id);

        if (!question) {
            throw new AppError('Question does not exists');
          }

        await questionRepository.remove(question);
    }
}

export default DeleteQuestionService;