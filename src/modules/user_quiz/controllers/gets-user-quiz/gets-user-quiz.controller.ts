import { Controller, Get, Param } from '@nestjs/common';
import { GetsUserQuizService } from '../../services/gets-user-quiz/gets-user-quiz.service';
import { UserQuizEntity } from 'src/typeorm/entities/user-quiz.entity';

@Controller('user-quiz')
export class GetsUserQuizController {

  constructor(private readonly getUserQuizService: GetsUserQuizService) { }

  @Get('getQuiz/:id')
  getQuiz(@Param('id') id: string): Promise<UserQuizEntity> {
    return this.getUserQuizService.getQuiz(id);
  }

}
