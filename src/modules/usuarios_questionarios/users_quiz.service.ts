import { Inject, Injectable } from "@nestjs/common";
import { UsersQuizEntity } from "./users_quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IUserQuizDoneDto } from "./dtos/IUserQuizDoneDto";
import { Quiz } from "../quiz/quiz.entity";
import { PedidosEntity } from "../entitys/pedidos.entity";
import { PedidosLoginsEntity } from "../entitys/pedidos-logins.entity";

@Injectable()
export class UsersQuizService {
  constructor(
    @InjectRepository(UsersQuizEntity) private readonly usersQuizRepository: Repository<UsersQuizEntity>,
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(PedidosEntity) private readonly pedidosRepository: Repository<PedidosEntity>,
    @InjectRepository(PedidosLoginsEntity) private readonly pedidosLoginsRepository: Repository<PedidosLoginsEntity>
  ) { }

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

  async getQuiz(userQuizId: string) {
    const dateNow = new Date(Date.now())
    const userQuiz = await this.usersQuizRepository.findOneById(userQuizId);
    const pedidoLogin = await this.pedidosLoginsRepository.findOneById(userQuiz.idPedidoLogin);
    const pedido = await this.pedidosRepository.findOneById(pedidoLogin.idPedido);
    if (userQuiz.respondido == 0 && pedido.prazoParticipacao < dateNow) {
      return this.quizRepository.findOneById(userQuiz.idQuestionario);
    }
    return pedido;
  }
}
