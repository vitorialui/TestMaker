import { EntityRepository, Repository } from 'typeorm';

import Question from '../models/Question';

@EntityRepository(Question)
class QuestionsRepository extends Repository<Question> {
  public async getById(subject_id: string): Promise<Question[]> {
    const questions = await this.find({
        where: { subject_id: subject_id }
    });

    return questions;
  }

  // public async getWithAlternatives(user_id: string): Promise<Question[]> {
  //   const questions = await this.find({
  //       where: { user_id: user_id }
  //   });

  //   return questions;
  // }
}

export default QuestionsRepository;
