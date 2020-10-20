import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';

import CreateSubjectService from '../services/CreateSubjectService';
import DeleteSubjectService from '../services/DeleteSubjectService';

import Subject from '../models/Subject';

import SubjectsRepository from '../repositories/SubjectsRepository';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const subjectsRouter = Router();

subjectsRouter.use(ensureAuthenticated);

subjectsRouter.get('/:user_id', async (request, response) => {
    const { user_id } = request.params;

    const subjectsRepository = getCustomRepository(SubjectsRepository);

    const subjects = await subjectsRepository.getById(user_id);

    return response.json(subjects);
});

subjectsRouter.get('/', async (request, response) => {

    const subjectsRepository = getRepository(Subject);

    const subjects = await subjectsRepository.find();

    return response.json(subjects);
});

subjectsRouter.post('/', async (request, response) => {
    const { title, user_id } = request.body;

    const createSubject = new CreateSubjectService();

    const subject = await createSubject.execute({ 
        title, 
        user_id 
    });

    return response.json(subject);
});

subjectsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const deleteQuestion = new DeleteSubjectService();

    await deleteQuestion.execute(id);

    return response.status(204).send();
});

export default subjectsRouter;