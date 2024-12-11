import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  public nome: string;

  @IsString()
  public email: string;

  @IsNumber()
  public arquivado: number;

  @IsNumber()
  public tipo: number;

  @IsNumber()
  public senha: string;

  @IsNumber()
  public status: number;
}
