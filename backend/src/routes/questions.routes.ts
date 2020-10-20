import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';

import CreateQuestionService from '../services/CreateQuestionService';
import DeleteQuestionService from '../services/DeleteQuestionService';

import Question from '../models/Question';

import QuestionsRepository from '../repositories/QuestionsRepository';
import alternativesRouter from './alternatives.routes';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const questionsRouter = Router();

questionsRouter.use(ensureAuthenticated);

questionsRouter.use('/alternatives', alternativesRouter);

questionsRouter.get('/:subject_id', async (request, response) => {
    const { subject_id } = request.params;

    const questionsRepository = getCustomRepository(QuestionsRepository);

    const questions = await questionsRepository.getById(subject_id);

    return response.json(questions);
});

questionsRouter.get('/', async (request, response) => {

    const questionsRepository = getRepository(Question);

    const questions = await questionsRepository.find();

    return response.json(questions);
});

questionsRouter.post('/', async (request, response) => {
    const { enunciado, subject_id } = request.body;

    const createQuestion = new CreateQuestionService();

    const question = await createQuestion.execute({ 
        enunciado, 
        subject_id 
    });

    return response.json(question);
});

questionsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const deleteQuestion = new DeleteQuestionService();

    await deleteQuestion.execute(id);

    return response.status(204).send();
});

export default questionsRouter;