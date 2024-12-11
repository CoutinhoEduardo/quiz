import { Test, TestingModule } from '@nestjs/testing';
import { PutsUserQuizController } from './puts-user-quiz.controller';

describe('PutsUserQuizController', () => {
  let controller: PutsUserQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PutsUserQuizController],
    }).compile();

    controller = module.get<PutsUserQuizController>(PutsUserQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
