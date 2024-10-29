import { Column, PrimaryGeneratedColumn } from "typeorm";

export class PedidosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idConsultor: number;

  @Column()
  idQuestionario: number;

  @Column()
  idDepartamento: number;

  @Column()
  dataCadastro: Date;

  @Column()
  qtdParticipantes: number;

  @Column()
  prazoParticipacao: Date;

  @Column()
  prefixoLogins: string;

  @Column()
  relatoriosDisponiveis: string;

  @Column()
  exibeResultado: number;

  @Column()
  exibeVideos: number

  @Column()
  exibeRelatorios: number;

  @Column()
  idEmpresa: number;

}
