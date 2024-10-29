import { Body, Controller, Param, Post, Put, Get } from "@nestjs/common";
import { UsersQuizService } from "./users_quiz.service";
import { IUserQuizUpdateDto } from "./dtos/userQuizUpdate.dto";
import { IUserQuizDoneDto } from "./dtos/IUserQuizDoneDto";

@Controller('users_quiz')
export class UsersQuizController {
  constructor(private readonly usersQuizService: UsersQuizService) { }

  @Put(':id')
  setQuizDone(@Body() data: IUserQuizDoneDto) {
    return this.usersQuizService.setQuizDone(data);
  }

  @Put('setConsolidated/:id')
  setQuizConsolidated(@Param('id') id: string) {
    return this.usersQuizService.setQuizConsolidated(id);
  }

  @Get('getQuiz/:id')
  getQuiz(@Param('id') id: string) {
    return this.usersQuizService.getQuiz(id);
  }
}

