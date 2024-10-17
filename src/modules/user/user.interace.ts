export interface IUser {
  id: number;
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
