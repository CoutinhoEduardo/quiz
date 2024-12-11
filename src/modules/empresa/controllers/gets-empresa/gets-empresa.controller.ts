import { Controller, Get } from '@nestjs/common';
import { GetsEmpresaService } from '../../services/gets-empresa/gets-empresa.service';
import { EmpresaEntity } from 'src/typeorm/entities/empresas.entity';

@Controller('empresa')
export class GetsEmpresaController {

  constructor(private readonly getempresaService: GetsEmpresaService) { }

  @Get()
  getEmpresas(): Promise<Array<EmpresaEntity>> {
    return this.getempresaService.getEmpresas();
  }
}
