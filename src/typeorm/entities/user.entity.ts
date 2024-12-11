import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { AnswerEntity } from "./answer.entity";

@Entity({ name: 'usuarios' })
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  nome: string;

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

  @OneToMany(() => AnswerEntity, (answer) => answer.user)
  answer: AnswerEntity[];
}
