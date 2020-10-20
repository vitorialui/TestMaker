import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Subject from '../models/Subject';

class DeleteSubjectService {
    public async execute(id: string): Promise<void> {
        const subjectRepository = getRepository(Subject);

        const subject = await subjectRepository.findOne(id);

        if (!subject) {
            throw new AppError('Subject does not exists');
          }

        await subjectRepository.remove(subject);
    }
}

export default DeleteSubjectService;