import { Controller, Get, Param } from "@nestjs/common";
import { EmpresaAndDepartamentoService } from "../services/empresa-and-departamento.service";
import { UtilService } from "../services/util.service";

@Controller('util')
export class UtilController {
  constructor(
    private readonly empresaAndDepartamentoService: EmpresaAndDepartamentoService,
    private readonly utilService: UtilService
  ) { }

  @Get('getEmpresasAndDepartamento/:id')
  filteredByEmpresaAndDepartamento(@Param('id') idEmpresa: number) {
    return this.empresaAndDepartamentoService.getEmpresasAndDepartamento(idEmpresa);
  }

  @Get('findDataToAnswerPost/:id')
  findDataToAnswerPost(@Param('id') idPedidoLogin: number) {
    return this.utilService.findDataToAnswerPost(idPedidoLogin);
  }
}
