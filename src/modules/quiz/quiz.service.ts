import { Injectable } from "@nestjs/common";
import { IQuiz } from "./quiz.interface";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Quiz } from "./quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizUpdateDto } from "./dtos/quizUpdate.dto";

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>) { }

  async createQuiz(quiz: IQuiz): Promise<any> {
    quiz.rules = JSON.stringify(quiz.rules);
    const created_quiz = this.quizRepository.create(quiz);
    return this.quizRepository.save(created_quiz);
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

  async findQuizById(id: number): Promise<Quiz[]> {
    const result = await this.quizRepository.findBy({ id })
    return result;
  }

  async deleteQuiz(id: number): Promise<DeleteResult> {
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
