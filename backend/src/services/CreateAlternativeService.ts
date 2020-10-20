import { getRepository } from 'typeorm';

import Alternative from '../models/Alternative';
import alternativesRouter from '../routes/alternatives.routes';

interface Request {
    question_id: string;
    alternativeText: string;
}

class CreateAlternativeService {
    public async execute({ question_id, alternativeText }: Request): Promise<Alternative> {
        const alternativeRepository = getRepository(Alternative);

        const alternative = alternativeRepository.create({
            question_id: question_id,
            alternative: alternativeText,
        });

        await alternativeRepository.save(alternative);

        return alternative;
    }
}

export default CreateAlternativeService;