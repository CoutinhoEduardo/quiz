import { Test, TestingModule } from '@nestjs/testing';
import { GetsQuizService } from './gets-quiz.service';

describe('GetsQuizService', () => {
  let service: GetsQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetsQuizService],
    }).compile();

    service = module.get<GetsQuizService>(GetsQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
