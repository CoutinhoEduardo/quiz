import { Test, TestingModule } from '@nestjs/testing';
import { PutsQuizService } from './puts-quiz.service';

describe('PutsQuizService', () => {
  let service: PutsQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PutsQuizService],
    }).compile();

    service = module.get<PutsQuizService>(PutsQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
