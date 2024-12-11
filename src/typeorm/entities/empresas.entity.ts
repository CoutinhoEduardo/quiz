import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('empresas')
export class EmpresaEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  endereco: string;

  @Column()
  idUsuario: string;

}
