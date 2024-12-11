import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from 'src/typeorm/entities/empresas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetsEmpresaService {

  constructor(@InjectRepository(EmpresaEntity) private readonly empresaRepository: Repository<EmpresaEntity>) { }

  getEmpresas(): Promise<Array<EmpresaEntity>> {
    return this.empresaRepository.find();
  }
}
