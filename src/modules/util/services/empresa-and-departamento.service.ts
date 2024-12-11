import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConsultorDepartamentoEntity } from "src/typeorm/entities/consultores_departamento.entity";
import { EmpresaDepartamentoEntity } from "src/typeorm/entities/empresa-departamento.entity";
import { EmpresaEntity } from "src/typeorm/entities/empresas.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmpresaAndDepartamentoService {
  constructor(
    @InjectRepository(EmpresaDepartamentoEntity) private readonly empresaDepartamentoRepository: Repository<EmpresaDepartamentoEntity>
  ) { }

  async getEmpresasAndDepartamento(idEmpresa: number) {
    const result = await this.empresaDepartamentoRepository.query(`
      select 
        e.id,
        e.idEmpresa,
        d.nome,
        d.nomeNormalizado
      from empresas_departamentos as e JOIN consultores_departamentos as d ON d.id = e.idDepartamento where idEmpresa = ?
    `, [idEmpresa])
    return result;
  }
}
