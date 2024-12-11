import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { QuizEntity } from 'src/typeorm/entities/quiz.entity';


@Injectable()
export class DeletesQuizService {

  constructor(@InjectRepository(QuizEntity) private readonly quizRepository: Repository<QuizEntity>) { }

  deleteQuiz(id: string): Promise<DeleteResult> {
    return this.quizRepository.delete({ id });
  }
}
