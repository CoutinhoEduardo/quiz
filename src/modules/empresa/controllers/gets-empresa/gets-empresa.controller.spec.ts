import { Test, TestingModule } from '@nestjs/testing';
import { GetsEmpresaController } from './gets-empresa.controller';

describe('GetsEmpresaController', () => {
  let controller: GetsEmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetsEmpresaController],
    }).compile();

    controller = module.get<GetsEmpresaController>(GetsEmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
