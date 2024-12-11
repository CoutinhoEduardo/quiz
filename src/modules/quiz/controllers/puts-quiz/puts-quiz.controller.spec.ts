import { Test, TestingModule } from '@nestjs/testing';
import { PutsQuizController } from './puts-quiz.controller';

describe('PutsQuizController', () => {
  let controller: PutsQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PutsQuizController],
    }).compile();

    controller = module.get<PutsQuizController>(PutsQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
