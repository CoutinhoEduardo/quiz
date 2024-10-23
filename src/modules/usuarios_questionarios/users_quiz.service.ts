import { Injectable } from "@nestjs/common";
import { UsersQuizEntity } from "./users_quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IUserQuizUpdateDto } from "./dtos/userQuizUpdate.dto";
@Injectable()
export class UsersQuizService {
  constructor(@InjectRepository(UsersQuizEntity) private readonly usersQuizRepository: Repository<UsersQuizEntity>) { }


  async setQuizDone(id: string) {
    const quizUpdate = await this.usersQuizRepository.findOneBy({ idQuestionario: id });
    quizUpdate.respondido = 1;
    await this.usersQuizRepository.save(quizUpdate);
  }

  async setQuizConsolidated(id: string) {
    const quizUpdate = await this.usersQuizRepository.findOneBy({ idQuestionario: id });
    quizUpdate.consolidado = 1;
    await this.usersQuizRepository.save(quizUpdate);
  }
}
