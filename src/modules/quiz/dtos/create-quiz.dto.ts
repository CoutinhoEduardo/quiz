import { IsOptional, IsString } from "class-validator";

export class CreateQuizDto {

  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  encrypted_data: string;

  @IsOptional()
  rules: string;

  @IsString()
  status: string;

  @IsString()
  @IsOptional()
  user_id: string;
}

export type RulesModel = {
  grade?: number;
  compare?: string;
  message: string;
  title?: string;
}
