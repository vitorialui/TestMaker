import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';

import User from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
    const usersRepository = getRepository(User);
	const users = await usersRepository.find();

	return response.json(users);
});

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name: name,
        email: email,
        password: password
    });

    return response.json(user);
});

usersRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    deleteUser.execute(id);

    return response.status(204).send();
});

export default usersRouter;