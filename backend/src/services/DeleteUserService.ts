import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';

class DeleteUserService {
    public async execute(id: string): Promise<void> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        if (!user) {
            throw new AppError('User does not exists');
        }

        await userRepository.remove(user);
    }
}

export default DeleteUserService;