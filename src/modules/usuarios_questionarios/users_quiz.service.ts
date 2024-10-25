import { Injectable } from "@nestjs/common";
import { UsersQuizEntity } from "./users_quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IUserQuizDoneDto } from "./dtos/IUserQuizDoneDto";

@Injectable()
export class UsersQuizService {
  constructor(@InjectRepository(UsersQuizEntity) private readonly usersQuizRepository: Repository<UsersQuizEntity>) { }

  async setQuizDone(data: IUserQuizDoneDto) {
    const quizUpdate = await this.usersQuizRepository.findOneById(data.id);
    quizUpdate.respondido = 1;
    quizUpdate.idResposta = data.idResposta;
    await this.usersQuizRepository.save(quizUpdate);
  }
  async setQuizConsolidated(id: string) {
    const quizUpdate = await this.usersQuizRepository.findOneBy({ idQuestionario: id });
    quizUpdate.consolidado = 1;
    await this.usersQuizRepository.save(quizUpdate);
  }
}
