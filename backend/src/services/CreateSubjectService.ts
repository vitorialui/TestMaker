import { getRepository } from 'typeorm';

import Subject from '../models/Subject';

interface Request {
    title: string;
    user_id: string;
}

class CreateSubjectService {
    public async execute({ title, user_id }: Request): Promise<Subject> {
        const subjectRepository = getRepository(Subject);

        const subject = subjectRepository.create({
            title: title,
            user_id: user_id,
        });

        await subjectRepository.save(subject);

        return subject;
    }
}

export default CreateSubjectService;