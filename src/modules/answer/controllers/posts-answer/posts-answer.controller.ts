import { Body, Controller, Post, Req } from '@nestjs/common';
import { PostsAnswerService } from '../../services/posts-answer/posts-answer.service';
import { CreateAnswerDto } from '../../dtos/create-answer.dto';
import { Request } from 'express';

@Controller('answer')
export class PostsAnswerController {

  constructor(private readonly answerService: PostsAnswerService) { }

  @Post()
  createAnswer(@Body() answer: CreateAnswerDto, @Req() request: Request) {
    return this.answerService.createAnswer(answer, request)
  }
}
