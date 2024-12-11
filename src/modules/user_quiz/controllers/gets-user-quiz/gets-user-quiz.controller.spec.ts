import { Test, TestingModule } from '@nestjs/testing';
import { GetsUserQuizController } from './gets-user-quiz.controller';

describe('GetsUserQuizController', () => {
  let controller: GetsUserQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetsUserQuizController],
    }).compile();

    controller = module.get<GetsUserQuizController>(GetsUserQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
