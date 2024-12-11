import { Test, TestingModule } from '@nestjs/testing';
import { GetAnswerService } from './get-answer.service'; describe('GetServiceService', () => {
  let service: GetAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAnswerService],
    }).compile();

    service = module.get<GetAnswerService>(GetAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
