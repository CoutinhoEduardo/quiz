import { Test, TestingModule } from '@nestjs/testing';
import { GetsUserQuizService } from './gets-user-quiz.service';

describe('GetsUserQuizService', () => {
  let service: GetsUserQuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetsUserQuizService],
    }).compile();

    service = module.get<GetsUserQuizService>(GetsUserQuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
