import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAnswerDto {

  @IsOptional()
  public id: string;

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public encrypted_data: string;

  @IsNumber()
  public type: string;

  @IsString()
  public idQuiz: string;

  @IsString()
  public user_id: string;

  @IsString()
  public rules: string;

  @IsString()
  public idEmpresa: string;

  @IsString()
  public idDepartamento: string;

}
