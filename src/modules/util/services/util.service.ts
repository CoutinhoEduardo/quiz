import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PedidosLoginsEntity } from "src/typeorm/entities/pedidos-logins.entity";
import { PedidosEntity } from "src/typeorm/entities/pedidos.entity";
import { Repository } from "typeorm";

@Injectable()
export class UtilService {

  constructor(
    @InjectRepository(PedidosLoginsEntity) private readonly pedidosLoginsRepository: Repository<PedidosLoginsEntity>,
    @InjectRepository(PedidosEntity) private readonly pedidosRepository: Repository<PedidosEntity>
  ) { }

  async findDataToAnswerPost(idPedidoLogin: number) {
    const pedidoLogin = await this.pedidosLoginsRepository.findOne({
      where: {
        id: idPedidoLogin
      }
    });
    const pedido = await this.pedidosRepository.findOne({
      where: {
        id: pedidoLogin.idPedido
      }
    });
    return { idEmpresa: pedido.idEmpresa, idDepartamento: pedido.idDepartamento }
  }
}
