import { Module } from "@nestjs/common";
import { UsersQuizController } from "./users_quiz.controller";
import { UsersQuizService } from "./users_quiz.service";
import { UsersQuizEntity } from "./users_quiz.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UsersQuizEntity])],
  exports: [],
  providers: [UsersQuizService],
  controllers: [UsersQuizController],
})
export class UsersQuizModule { }
