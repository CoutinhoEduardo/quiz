import { Injectable } from "@nestjs/common";
import { AnswerEntity } from "./answer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IAnswer } from "./answer.interface";
import { AuthGuard } from "../auth/auth.guard";
import { Request } from "express";

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerEntity)
    private readonly answerRepository: Repository<AnswerEntity>,
    private readonly authGuard: AuthGuard) { }

  async createAnswer(answer: IAnswer, request: Request) {
    const id = await this.authGuard.extractUserFromHeader(request);
    answer.user_id = id;
    answer.rules = JSON.stringify(answer.rules)
    const created_answer = this.answerRepository.create(answer);
    return await this.answerRepository.save(created_answer);
  }

  async getAnswerById(id: number): Promise<IAnswer[]> {
    const result = await this.answerRepository.findBy({ id });
    return result;
  }

  async getAnswers(): Promise<IAnswer[]> {
    const result = await this.answerRepository.find();
    return result;
  }
}
