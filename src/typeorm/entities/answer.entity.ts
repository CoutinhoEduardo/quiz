import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'answer' })
export class AnswerEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column()
  user_id: string;

  @Column()
  idConsultor: string;

  @Column()
  idQuiz: string;

  @Column()
  encrypted_data: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  rules: string;

  @Column({ nullable: true })
  idEmpresa: string;

  @Column({ nullable: true })
  idDepartamento: string;

  @ManyToOne(() => UserEntity, (user) => user.answer)
  user: UserEntity;
}
