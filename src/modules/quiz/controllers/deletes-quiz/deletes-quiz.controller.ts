import { Controller, Delete, Param } from '@nestjs/common';
import { DeletesQuizService } from '../../services/deletes-quiz/deletes-quiz.service';
import { DeleteResult } from 'typeorm';

@Controller('quiz')
export class DeletesQuizController {

  constructor(private readonly deletesQuizService: DeletesQuizService) { }

  @Delete(':id')
  deleteQuiz(@Param('id') id: string): Promise<DeleteResult> {
    return this.deletesQuizService.deleteQuiz(id);
  }
}
