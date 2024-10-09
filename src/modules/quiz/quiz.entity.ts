import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({ name: 'quiz' })
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column()
  user_id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column()
  description: string;

  @Column()
  encrypted_data: string;

  @Column()
  rules: string;

  @Column()
  status: string;
}
