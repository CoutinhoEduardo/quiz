import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerEntity } from 'src/typeorm/entities/answer.entity';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from '../../dtos/create-answer.dto';
import { Request } from 'express';
import { v4 as uuid } from 'uuid';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PostsAnswerService {

  constructor(
    @InjectRepository(AnswerEntity) private readonly answerRepository: Repository<AnswerEntity>,
    private readonly authGuard: AuthGuard
  ) { }

  async createAnswer(answer: CreateAnswerDto, request: Request): Promise<AnswerEntity> {
    const newId = uuid();
    answer.id = newId;
    const id = await this.authGuard.extractUserFromHeader(request);
    answer.user_id = id;
    answer.rules = JSON.stringify(answer.rules);
    try {
      const created_answer = this.answerRepository.create(answer);
      return await this.answerRepository.save(created_answer);
    } catch (err) {
      throw new HttpException(
        'Erro ao salvar resposta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getAnswers(): Promise<Array<AnswerEntity>> {
    return this.answerRepository.find();
  }
}
