import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { QuizEntity } from 'src/typeorm/entities/quiz.entity';
import { UpdateQuizDto } from '../../dtos/update-quiz.dto';


@Injectable()
export class PutsQuizService {

  constructor(@InjectRepository(QuizEntity) private readonly quizRepository: Repository<QuizEntity>) { }

  updateQuiz(quiz: UpdateQuizDto): Promise<UpdateResult> {
    return this, this.quizRepository.update({ id: quiz.id }, quiz);
  }
}
