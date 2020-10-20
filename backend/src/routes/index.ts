import { Router } from 'express';
import usersRouter from './users.routes';
import subjectsRouter from './subjects.routes';
import questionsRouter from './questions.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/subjects', subjectsRouter);
routes.use('/questions', questionsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;