import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Alternative from '../models/Alternative';

import AlternativesRepository from '../repositories/AlternativesRepository';
import CreateAlternativeService from '../services/CreateAlternativeService';
import DeleteAlternativeService from '../services/DeleteAlternativeService';

const alternativesRouter = Router();

alternativesRouter.get('/:question_id', async (request, response) => {
    const { question_id } = request.params;

    const alternativesRepository = getCustomRepository(AlternativesRepository);

    const alternatives = await alternativesRepository.getById(question_id);

    return response.json(alternatives);
});

alternativesRouter.get('/', async (request, response) => {
    const alternativesRepository = getRepository(Alternative);

    const alternatives = await alternativesRepository.find();

    return response.json(alternatives);
});

alternativesRouter.post('/', async (request, response) => {
    const { question_id, alternative } = request.body;

    const createAlternative = new CreateAlternativeService();

    const alternatives = await createAlternative.execute({ 
        question_id: question_id, 
        alternativeText: alternative 
    });

    return response.json(alternatives);
});

alternativesRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const deleteAlternative = new DeleteAlternativeService();

    await deleteAlternative.execute(id);

    return response.status(204).send();
});

export default alternativesRouter;