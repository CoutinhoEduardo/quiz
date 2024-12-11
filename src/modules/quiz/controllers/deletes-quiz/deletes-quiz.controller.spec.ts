import { Test, TestingModule } from '@nestjs/testing';
import { DeletesQuizController } from './deletes-quiz.controller';

describe('DeletesQuizController', () => {
  let controller: DeletesQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeletesQuizController],
    }).compile();

    controller = module.get<DeletesQuizController>(DeletesQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
