import { EntityRepository, Repository } from 'typeorm';

import Alternative from '../models/Alternative';

@EntityRepository(Alternative)
class AlternativesRepository extends Repository<Alternative> {
  public async getById(question_id: string): Promise<Alternative[]> {
    const alternatives = await this.find({
        where: { question_id: question_id }
    });

    return alternatives;
  }
}

export default AlternativesRepository;
