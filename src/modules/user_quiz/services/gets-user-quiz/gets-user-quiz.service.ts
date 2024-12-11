import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserQuizEntity } from 'src/typeorm/entities/user-quiz.entity';
import { Repository } from 'typeorm';


@Injectable()
export class GetsUserQuizService {

  constructor(@InjectRepository(UserQuizEntity) private readonly userQuizRepository: Repository<UserQuizEntity>) { }

  getQuiz(id: string): Promise<UserQuizEntity> {
    return this.userQuizRepository.findOneById(id);
  }
}
