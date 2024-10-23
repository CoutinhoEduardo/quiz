import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { UsersQuizService } from "./users_quiz.service";
import { IUserQuizUpdateDto } from "./dtos/userQuizUpdate.dto";

@Controller('users_quiz')
export class UsersQuizController {
  constructor(private readonly usersQuizService: UsersQuizService) { }

  @Put(':id')
  setQuizDone(@Param('id') id: string) {
    return this.usersQuizService.setQuizDone(id);
  }

  @Put('setConsolidated/:id')
  setQuizConsolidated(@Param('id') id: string) {
    return this.usersQuizService.setQuizConsolidated(id);
  }
}

