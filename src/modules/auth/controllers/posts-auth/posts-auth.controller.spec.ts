import { Test, TestingModule } from '@nestjs/testing';
import { PostsAuthController } from './posts-auth.controller';

describe('PostsAuthController', () => {
  let controller: PostsAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsAuthController],
    }).compile();

    controller = module.get<PostsAuthController>(PostsAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
