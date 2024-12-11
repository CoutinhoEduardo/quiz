import { Test, TestingModule } from '@nestjs/testing';
import { DeletesQuizService } from './deletes-quiz.service';

describe('DeletesQuizService', () => {
  let service: DeletesQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletesQuizService],
    }).compile();

    service = module.get<DeletesQuizService>(DeletesQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
