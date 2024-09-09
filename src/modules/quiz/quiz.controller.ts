import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { IQuiz } from "./quiz.interface";

@Controller('quiz')
export class QuizController{
  constructor(private readonly quizService: QuizService){}

  @Post()
  async createQuiz(@Body() quiz: IQuiz){
    return this.quizService.createQuiz(quiz);
  }

  @Get()
  async getQuiz(){
    return this.quizService.getQuiz();
  }

  @Get(":id")
  async findQuizById(@Param('id') id: number){
    return this.quizService.findQuizById(id); 
  }
}
