import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostsQuizService } from '../../services/posts-quiz/posts-quiz.service';
import { CreateQuizDto } from '../../dtos/create-quiz.dto';
import { QuizEntity } from 'src/typeorm/entities/quiz.entity';
import { Request } from 'express';


@Controller('quiz')
export class PostsQuizController {

  constructor(private readonly quizService: PostsQuizService) { }

  @Post()
  createQuiz(@Body() quiz: CreateQuizDto, @Req() request: Request): Promise<QuizEntity> {
    return this.quizService.createQuiz(quiz, request)
  }

}
