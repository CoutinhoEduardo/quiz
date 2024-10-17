import { UseGuards, Body, Controller, Post, Get, Param, Delete, Put, Req, ExecutionContext } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { IQuiz } from "./quiz.interface";
import { DeleteResult, EntitySchema, UpdateResult } from "typeorm";
import { QuizUpdateDto } from "./dtos/quizUpdate.dto";
import { AuthGuard } from "../auth/auth.guard";
import { Request } from "express";
@UseGuards(AuthGuard)
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }

  @Post()
  async createQuiz(@Body() quiz: IQuiz, @Req() request: Request) {
    return this.quizService.createQuiz(quiz, request);
  }

  @Get()
  async getQuiz() {
    return this.quizService.findQuiz();
  }

  @Get(":id")
  async findQuizById(@Param('id') id: string) {
    return this.quizService.findQuizById(id);
  }

  @Delete(":id")
  async deleteQuiz(@Param('id') id: string): Promise<DeleteResult> {
    return this.quizService.deleteQuiz(id);
  }

  @Put()
  async updateQuiz(@Body() quiz: QuizUpdateDto): Promise<UpdateResult> {
    return this.quizService.updateQuiz(quiz);
  }

}
