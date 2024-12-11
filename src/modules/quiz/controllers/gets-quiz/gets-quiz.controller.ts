import { Controller, Get, Param } from '@nestjs/common';
import { GetsQuizService } from '../../services/gets-quiz/gets-quiz.service';

@Controller('quiz')
export class GetsQuizController {

  constructor(private readonly getsQuizService: GetsQuizService) { }

  @Get()
  getQuiz() {
    return this.getsQuizService.getQuiz();
  }

  @Get(':id')
  getQuizById(@Param('id') id: string) {
    return this.getsQuizService.getQuizById(id);
  }

}
