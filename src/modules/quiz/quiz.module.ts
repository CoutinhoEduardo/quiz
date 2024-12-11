import { Module } from '@nestjs/common';
import { PostsQuizService } from './services/posts-quiz/posts-quiz.service';
import { PostsQuizController } from './controllers/posts-quiz/posts-quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizEntity } from 'src/typeorm/entities/quiz.entity';
import { GetsQuizController } from './controllers/gets-quiz/gets-quiz.controller';
import { GetsQuizService } from './services/gets-quiz/gets-quiz.service';
import { DeletesQuizService } from './services/deletes-quiz/deletes-quiz.service';
import { DeletesQuizController } from './controllers/deletes-quiz/deletes-quiz.controller';
import { PutsQuizController } from './controllers/puts-quiz/puts-quiz.controller';
import { PutsQuizService } from './services/puts-quiz/puts-quiz.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([QuizEntity])],
  providers: [PostsQuizService, GetsQuizService, DeletesQuizService, PutsQuizService],
  controllers: [PostsQuizController, GetsQuizController, DeletesQuizController, PutsQuizController]
})
export class QuizModule { }
