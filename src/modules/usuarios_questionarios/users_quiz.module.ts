import { Module } from "@nestjs/common";
import { UsersQuizController } from "./users_quiz.controller";
import { UsersQuizService } from "./users_quiz.service";
import { UsersQuizEntity } from "./users_quiz.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Quiz } from "../quiz/quiz.entity";
import { PedidosEntity } from "../entitys/pedidos.entity";
import { PedidosLoginsEntity } from "../entitys/pedidos-logins.entity";
@Module({
  imports: [TypeOrmModule.forFeature([UsersQuizEntity, Quiz, PedidosEntity, PedidosLoginsEntity])],
  exports: [],
  providers: [UsersQuizService],
  controllers: [UsersQuizController],
})
export class UsersQuizModule { }
