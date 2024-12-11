import { Injectable } from '@nestjs/common';
import { UserQuizDoneDto } from '../../dtos/user-quiz-done.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserQuizEntity } from 'src/typeorm/entities/user-quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PutsUserQuizService {

  constructor(@InjectRepository(UserQuizEntity) private readonly userQuizRepository: Repository<UserQuizEntity>) { }

  async setQuizDone(user_quiz: UserQuizDoneDto) {
    console.log(user_quiz);
    const id = +user_quiz.id;
    const quizUpdate = await this.userQuizRepository.findOneById(id);
    console.log(quizUpdate);
    quizUpdate.respondido = 1;
    quizUpdate.idResposta = user_quiz.idResposta;
    await this.userQuizRepository.save(quizUpdate);
  }

  async setQuizConsolidated(id: string) {
    const quizUpdate = await this.userQuizRepository.findOneBy({ idQuestionario: id });
    quizUpdate.consolidado = 1;
    await this.userQuizRepository.save(quizUpdate);
  }

}
