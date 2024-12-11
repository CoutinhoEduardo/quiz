import { Module } from '@nestjs/common';
import { PostsAnswerController } from './controllers/posts-answer/posts-answer.controller';
import { PostsAnswerService } from './services/posts-answer/posts-answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerEntity } from 'src/typeorm/entities/answer.entity';
import { GetAnswerService } from './services/get-service/get-answer.service';
import { AuthModule } from '../auth/auth.module';
import { AnswerGetsController } from './controllers/gets-answer.controller.ts/gets-answer.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnswerEntity]),
    AuthModule
  ],
  controllers: [PostsAnswerController, AnswerGetsController],
  providers: [PostsAnswerService, GetAnswerService]
})
export class AnswerModule { }
