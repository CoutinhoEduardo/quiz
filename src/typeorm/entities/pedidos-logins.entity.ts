import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: 'pedidos_logins' })
export class PedidosLoginsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPedido: number;

  @Column()
  idUsuario: number;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  email: string;

}
