import { Test, TestingModule } from '@nestjs/testing';
import { PostsQuizController } from './posts-quiz.controller';

describe('QuizController', () => {
  let controller: PostsQuizController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsQuizController],
    }).compile();

    controller = module.get<PostsQuizController>(PostsQuizController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
