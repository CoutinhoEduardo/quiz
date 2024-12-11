import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({ name: 'usuarios_questionarios' })

export class UserQuizEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPedidoLogin: string;

  @Column()
  idUsuario: string;

  @Column()
  idResposta: string;

  @Column()
  idQuestionario: string;

  @Column()
  respondido: number;

  @Column()
  consolidado: number;

  @Column()
  data: Date;
}
