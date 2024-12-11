import { IsOptional, IsString } from "class-validator";

export class FilteredAnswerDto {

  @IsString()
  idQuiz: string;

  @IsString()
  @IsOptional()
  idEmpresa: string;

  @IsString()
  @IsOptional()
  idDepartamento: string;
}
