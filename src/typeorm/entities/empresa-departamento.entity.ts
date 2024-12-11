import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('empresas_departamentos')
export class EmpresaDepartamentoEntity {

  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public idDepartamento: number;

  @Column()
  public idEmpresa: number

}
