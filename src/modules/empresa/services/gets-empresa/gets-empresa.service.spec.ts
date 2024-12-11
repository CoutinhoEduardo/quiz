import { Test, TestingModule } from '@nestjs/testing';
import { GetsEmpresaService } from './gets-empresa.service';

describe('GetsEmpresaService', () => {
  let service: GetsEmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetsEmpresaService],
    }).compile();

    service = module.get<GetsEmpresaService>(GetsEmpresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
