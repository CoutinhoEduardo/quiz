import { Injectable } from "@nestjs/common";
import { AnswerEntity } from "./answer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IAnswer } from "./answer.interface";

@Injectable()
export class AnswerService {
  constructor(@InjectRepository(AnswerEntity) private readonly answerRepository: Repository<AnswerEntity>){}
 
  async createAnswer(answer: IAnswer){
    const created_answer = this.answerRepository.create(answer);
    return await this.answerRepository.save(created_answer);
  }

  async getAnswerById(id: number){
    const result = await this.answerRepository.findBy({id});
    return result;
  }

  async getAnswers(){
    const result = await this.answerRepository.find();
    return result;
  }
}
