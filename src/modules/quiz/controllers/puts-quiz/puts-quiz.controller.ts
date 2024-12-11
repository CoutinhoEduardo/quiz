import { Body, Controller } from '@nestjs/common';
import { PutsQuizService } from '../../services/puts-quiz/puts-quiz.service';
import { UpdateQuizDto } from '../../dtos/update-quiz.dto';
import { UpdateResult } from 'typeorm';

@Controller('quiz')
export class PutsQuizController {
  constructor(private readonly putsQuizService: PutsQuizService) { }

  updateQuiz(@Body() quiz: UpdateQuizDto): Promise<UpdateResult> {
    return this.putsQuizService.updateQuiz(quiz)
  }
}
