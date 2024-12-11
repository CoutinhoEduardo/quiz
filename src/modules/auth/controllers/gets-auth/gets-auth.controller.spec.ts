import { Test, TestingModule } from '@nestjs/testing';
import { GetsAuthController } from './gets-auth.controller';

describe('GetsAuthController', () => {
  let controller: GetsAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetsAuthController],
    }).compile();

    controller = module.get<GetsAuthController>(GetsAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
