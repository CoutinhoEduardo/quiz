import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Answer } from "./answer";

@Entity({ name: 'answer' })
export class AnswerEntity extends Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  title: string;

  @Column()
  user_id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column()
  encrypted_data: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  rules: string;
}
