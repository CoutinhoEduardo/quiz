import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Answer } from './answer';
import { User } from '../user/user';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'answer' })
export class AnswerEntity extends Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column()
  user_id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

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

  @ManyToOne(() => UserEntity, (user) => user.answer) // Adicione esta linha
  @JoinColumn({ name: 'user_id' })
  user: UserEntity; // Adicione esta linha
}
