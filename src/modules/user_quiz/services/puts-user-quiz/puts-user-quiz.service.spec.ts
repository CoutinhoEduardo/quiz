import { Test, TestingModule } from '@nestjs/testing';
import { PutsUserQuizService } from './puts-user-quiz.service';

describe('PutsUserQuizService', () => {
  let service: PutsUserQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PutsUserQuizService],
    }).compile();

    service = module.get<PutsUserQuizService>(PutsUserQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
