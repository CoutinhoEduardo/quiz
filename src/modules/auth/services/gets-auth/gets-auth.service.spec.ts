import { Test, TestingModule } from '@nestjs/testing';
import { GetsAuthService } from './gets-auth.service';

describe('GetsAuthService', () => {
  let service: GetsAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetsAuthService],
    }).compile();

    service = module.get<GetsAuthService>(GetsAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
