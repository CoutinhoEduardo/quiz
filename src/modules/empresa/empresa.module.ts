import { Module } from '@nestjs/common';
import { GetsEmpresaController } from './controllers/gets-empresa/gets-empresa.controller';
import { GetsEmpresaService } from './services/gets-empresa/gets-empresa.service';
import { EmpresaEntity } from 'src/typeorm/entities/empresas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaEntity])],
  controllers: [GetsEmpresaController],
  providers: [GetsEmpresaService]
})
export class EmpresaModule { }
