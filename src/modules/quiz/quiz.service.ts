import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IQuiz } from "./quiz.interface";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Quiz } from "./quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizUpdateDto } from "./dtos/quizUpdate.dto";
import { AuthGuard } from "../auth/auth.guard";
import { Request } from 'express';
import { v4 as uuid } from 'uuid';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>, private readonly authGuard: AuthGuard) { }

  async createQuiz(quiz: IQuiz, request: Request): Promise<any> {
    const newUuid = uuid();
    const id = await this.authGuard.extractUserFromHeader(request);
    quiz.user_id = id;
    quiz.id = newUuid;
    quiz.rules = JSON.stringify(quiz.rules);
    try {
      const created_quiz = this.quizRepository.create(quiz);
      return this.quizRepository.save(created_quiz);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findQuiz(): Promise<Quiz[]> {
    const results = await this.quizRepository.find();
    results.forEach((result: Quiz) => {
      if (result.rules != '')
        result.rules = JSON.parse(result.rules)
      return
    })
    return results;
  }

  async findQuizById(id: string): Promise<Quiz[]> {
    const result = await this.quizRepository.findBy({ id })
    return result;
  }

  async deleteQuiz(id: string): Promise<DeleteResult> {
    const result = await this.quizRepository.delete({ id });
    return result;
  }

  async updateQuiz(quiz: QuizUpdateDto): Promise<UpdateResult> {
    if (quiz.rules)
      quiz.rules = JSON.stringify(quiz.rules);
    const result = await this.quizRepository.update({ id: quiz.id }, quiz)
    return result;
  }
}
