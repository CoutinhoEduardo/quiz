import { RulesModel } from "src/modules/quiz/dtos/create-quiz.dto";
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: 'quiz', synchronize: false })
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column()
  user_id: string;

  @Column()
  created_at: Date;

  @Column()
  description: string;

  @Column()
  type: number;

  @Column()
  encrypted_data: string;

  @Column()
  status: string;

  @Column()
  rules: string;
}
