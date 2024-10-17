import { IUser } from "./user.interace";

export class User implements IUser {
  id: number
  nome: string;
  email: string;
  senha: string;
  cartaoBandeira: string;
  cartaoTruncado: string;
  cartaoTitular: string;
  cartaoToken: string;
  status: number;
  tipo: number;
  arquivado: number;
}
