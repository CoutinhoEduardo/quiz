import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizEntity } from 'src/typeorm/entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../../dtos/create-quiz.dto';
import { Request } from 'express';
import { v4 as uuid } from 'uuid';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PostsQuizService {

  constructor(
    @InjectRepository(QuizEntity) private readonly quizRepository: Repository<QuizEntity>,
    private readonly authGuard: AuthGuard
  ) { }

  async createQuiz(quiz: CreateQuizDto, request: Request) {
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
}
