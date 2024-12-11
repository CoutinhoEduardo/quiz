import { Module } from "@nestjs/common";
import { ConsultorDepartamentoEntity } from "src/typeorm/entities/consultores_departamento.entity";
import { EmpresaDepartamentoEntity } from "src/typeorm/entities/empresa-departamento.entity";
import { EmpresaEntity } from "src/typeorm/entities/empresas.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmpresaAndDepartamentoService } from "./services/empresa-and-departamento.service";
import { UtilController } from "./controllers/util.controller";
import { PedidosLoginsEntity } from "src/typeorm/entities/pedidos-logins.entity";
import { PedidosEntity } from "src/typeorm/entities/pedidos.entity";
import { UtilService } from "./services/util.service";

@Module({
  imports: [TypeOrmModule.forFeature([
    EmpresaEntity,
    EmpresaDepartamentoEntity,
    ConsultorDepartamentoEntity,
    PedidosLoginsEntity,
    PedidosEntity
  ])],
  exports: [],
  providers: [EmpresaAndDepartamentoService, UtilService],
  controllers: [UtilController]
})
export class UtilModule { }
