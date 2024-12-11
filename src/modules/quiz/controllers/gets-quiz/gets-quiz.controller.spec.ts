import { Test, TestingModule } from '@nestjs/testing';
import { GetsQuizController } from './gets-quiz.controller';

describe('GetsQuizController', () => {
  let controller: GetsQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetsQuizController],
    }).compile();

    controller = module.get<GetsQuizController>(GetsQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
