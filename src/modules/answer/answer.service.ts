import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AnswerEntity } from "./answer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IAnswer } from "./answer.interface";
import { AuthGuard } from "../auth/auth.guard";
import { Request } from "express";
import { v4 as uuid } from 'uuid';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerEntity)
    private readonly answerRepository: Repository<AnswerEntity>,
    private readonly authGuard: AuthGuard) { }

  async createAnswer(answer: IAnswer, request: Request) {
    const newId = uuid();
    answer.id = newId;
    const id = await this.authGuard.extractUserFromHeader(request);
    answer.user_id = id;
    answer.rules = JSON.stringify(answer.rules)
    try {
      const created_answer = this.answerRepository.create(answer);
      return await this.answerRepository.save(created_answer);
    }
    catch (err) {
      throw new HttpException("Erro ao salvar resposta", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async getAnswerById(id: string): Promise<IAnswer[]> {
    const result = await this.answerRepository.findBy({ id });
    return result;
  }

  async getAnswers(): Promise<IAnswer[]> {
    const result = await this.answerRepository.find();
    return result;
  }
}
