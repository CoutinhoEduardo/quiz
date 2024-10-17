import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { AnswerService } from "./answer.service";
import { IAnswer } from "./answer.interface";
import { Request } from "express";

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) { }

  @Post()
  createAnswer(@Body() answer: IAnswer, @Req() request: Request) {
    return this.answerService.createAnswer(answer, request);
  }

  @Get(":id")
  getAnswerById(@Param("id") id: string) {
    return this.answerService.getAnswerById(id);
  }

  @Get()
  getAnswers() {
    return this.answerService.getAnswers();
  }
}
