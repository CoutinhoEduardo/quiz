import { Test, TestingModule } from '@nestjs/testing';
import { PostsAuthService } from './posts-auth.service';

describe('PostsAuthService', () => {
  let service: PostsAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsAuthService],
    }).compile();

    service = module.get<PostsAuthService>(PostsAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
