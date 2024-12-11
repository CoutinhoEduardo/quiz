import { Test, TestingModule } from '@nestjs/testing';
import { PostsAnswerService } from './posts-answer.service';

describe('AnswerService', () => {
  let service: PostsAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsAnswerService],
    }).compile();

    service = module.get<PostsAnswerService>(PostsAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
