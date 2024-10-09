import { Module } from "@nestjs/common";
import { AnswerController } from "./answer.controller";
import { AnswerService } from "./answer.service";
import { AnswerEntity } from "./answer.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([AnswerEntity])],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule { }
