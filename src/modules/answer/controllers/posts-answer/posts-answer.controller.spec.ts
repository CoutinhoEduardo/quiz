import { Test, TestingModule } from '@nestjs/testing';
import { PostsAnswerController } from './posts-answer.controller';

describe('AnswerController', () => {
  let controller: PostsAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsAnswerController],
    }).compile();

    controller = module.get<PostsAnswerController>(PostsAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
