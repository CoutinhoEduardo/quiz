import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { IUsersQuiz } from './users_quiz.interface';

@Entity({ name: 'usuarios_questionarios' })
export class UsersQuizEntity implements IUsersQuiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPedidoLogin: string;

  @Column()
  idUsuario: string;

  @Column()
  idAnswer: string;


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
