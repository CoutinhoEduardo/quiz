import { Injectable } from "@nestjs/common";
import { IQuiz } from "./quiz.interface";
import { DeleteResult, EntitySchema, Repository, UpdateResult } from "typeorm";
import { Quiz } from "./quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizUpdateDto } from "./dtos/quizUpdate.dto";

@Injectable()
export class QuizService{
  constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>){}

  async createQuiz(quiz: IQuiz): Promise<any>{
    const created_quiz = this.quizRepository.create(quiz);
    return this.quizRepository.save(created_quiz); 
  }

  async getQuiz(): Promise<Quiz[]>{
    return this.quizRepository.find();
  }

  async findQuizById(id: number): Promise<Quiz[]>{
    const result = await this.quizRepository.findBy({id})
    return result;
  }

  async deleteQuiz(id: number): Promise<DeleteResult>{
    const result = await this.quizRepository.delete({id});
    return result;
  }

  async updateQuiz(quiz: QuizUpdateDto): Promise<UpdateResult>{
    const result = await this.quizRepository.update({id: quiz.id}, quiz)
    return result;
  }
}
