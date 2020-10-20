import { EntityRepository, Repository } from 'typeorm';

import Subject from '../models/Subject';

@EntityRepository(Subject)
class SubjectsRepository extends Repository<Subject> {
  public async getById(user_id: string): Promise<Subject[]> {
    const subjects = await this.find({
        where: { user_id: user_id }
    });

    return subjects;
  }
}

export default SubjectsRepository;
