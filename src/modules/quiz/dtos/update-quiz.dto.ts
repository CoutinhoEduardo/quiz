import { IsOptional, IsString } from "class-validator";

export class UpdateQuizDto {
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  encrypted_data: string;

  @IsOptional()
  @IsString()
  rules: string;

  @IsOptional()
  @IsString()
  status: string;
}
