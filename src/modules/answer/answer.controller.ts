import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AnswerService } from "./answer.service";
import { IAnswer } from "./answer.interface";

@Controller('answer')
export class AnswerController{
  constructor(private readonly answerService: AnswerService){}

  @Post()
  createAnswer(@Body() answer: IAnswer){
    return this.answerService.createAnswer(answer);
  }

  @Get(":id")
  getAnswerById(@Param("id") id: number){
    return this.answerService.getAnswerById(id); 
  }

  @Get()
  getAnswers(){
   return this.answerService.getAnswers(); 
  }
}
