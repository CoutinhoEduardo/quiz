import { Controller, Get, Param, Query } from "@nestjs/common";
import { AnswerEntity } from "src/typeorm/entities/answer.entity";
import { GetAnswerService } from "../../services/get-service/get-answer.service";
import { FilteredAnswerDto } from "../../dtos/filteredAnswer.dto";

@Controller('answer')
export class AnswerGetsController {

  constructor(private readonly answerService: GetAnswerService) { }

  @Get()
  getAswears(): Promise<Array<AnswerEntity>> {
    return this.answerService.getAnswers();
  }

  @Get(':id')
  getAnswersById(@Param('id') id: string): Promise<AnswerEntity> {
    return this.answerService.getAnswerById(id);
  }

  @Get('findAnswer/filteredAnswers')
  filteredAnswer(@Query() filteredAnswer: FilteredAnswerDto) {
    return this.answerService.filteredAnswers(filteredAnswer);
  }
}
