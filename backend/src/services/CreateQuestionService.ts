import { getRepository } from 'typeorm';

import Question from '../models/Question';

interface Request {
    enunciado: string;
    subject_id: string;
}

class CreateQuestionService {
    public async execute({ enunciado, subject_id }: Request): Promise<Question> {
        const questionRepository = getRepository(Question);

        const question = questionRepository.create({
            enunciado: enunciado,
            subject_id: subject_id,
        });

        await questionRepository.save(question);

        return question;
    }
}

export default CreateQuestionService;