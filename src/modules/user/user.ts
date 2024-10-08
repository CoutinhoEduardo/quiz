import { IUser } from "./user.interace";

export class User implements IUser { 
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
