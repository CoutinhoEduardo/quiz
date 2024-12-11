import { IsString } from "class-validator";

export class UserQuizDoneDto {

  @IsString()
  id: string;

  @IsString()
  idResposta: string;

  @IsString()
  idQuestionario: string;
}
