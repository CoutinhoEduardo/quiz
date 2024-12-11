import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizEntity } from 'src/typeorm/entities/quiz.entity';

@Injectable()
export class GetsQuizService {

  constructor(@InjectRepository(QuizEntity) private readonly quizRepository: Repository<QuizEntity>) { }

  getQuiz(): Promise<Array<QuizEntity>> {
    return this.quizRepository.find();
  }

  getQuizById(id: string): Promise<QuizEntity> {
    return this.quizRepository.findOneById(id);
  }
}
