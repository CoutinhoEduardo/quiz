import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('consultores_departamentos')
export class ConsultorDepartamentoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  idConsultor: string;

  @Column()
  nome: string;

  @Column()
  nomeNormalizado: string;
}
