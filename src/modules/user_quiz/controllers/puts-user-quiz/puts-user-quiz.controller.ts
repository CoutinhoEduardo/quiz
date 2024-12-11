import { Body, Controller, Param, Put } from '@nestjs/common';
import { PutsUserQuizService } from '../../services/puts-user-quiz/puts-user-quiz.service';
import { UserQuizDoneDto } from '../../dtos/user-quiz-done.dto';

@Controller('user-quiz')
export class PutsUserQuizController {

  constructor(private readonly putsUserQuizService: PutsUserQuizService) { }

  @Put()
  setQuizDone(@Body() userQuizDoneDto: UserQuizDoneDto) {
    return this.putsUserQuizService.setQuizDone(userQuizDoneDto)
  }

  @Put('setConsolidated/:id')
  setQuizConsolidated(@Param('id') id: string) {
    return this.putsUserQuizService.setQuizConsolidated(id);
  }
}
