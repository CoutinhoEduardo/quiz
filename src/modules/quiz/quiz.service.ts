import { Injectable } from "@nestjs/common";
import { IQuiz } from "./quiz.interface";
import { Repository } from "typeorm";
import { Quiz } from "./quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class QuizService{
  constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>){}

  async createQuiz(quiz: IQuiz){
    const created_quiz = this.quizRepository.create(quiz);
    return await this.quizRepository.save(created_quiz);
  }

  async getQuiz(){
    return this.quizRepository.find();
  }

  async findQuizById(id: number){
    const result = await this.quizRepository.findBy({id})
    return result;
  }
}
