import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { User } from './user';
import { AnswerEntity } from '../answer/answer.entity';

@Entity({ name: 'user' })
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cartaoTruncado: string;

  @Column()
  cartaoBandeira: string;

  @Column()
  cartaoToken: string;

  @Column()
  cartaoTitular: string;

  @Column()
  senha: string;

  @Column()
  arquivado: number;

  @Column()
  tipo: number;

  @Column()
  status: number;

  @OneToMany(() => AnswerEntity, (answer) => answer.user) // Adicione esta linha
  answer: AnswerEntity[]; // Adicione esta linha
}
