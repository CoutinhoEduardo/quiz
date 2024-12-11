import { Module } from '@nestjs/common';
import { GetsUserQuizController } from './controllers/gets-user-quiz/gets-user-quiz.controller';
import { PutsUserQuizController } from './controllers/puts-user-quiz/puts-user-quiz.controller';
import { PutsUserQuizService } from './services/puts-user-quiz/puts-user-quiz.service';
import { GetsUserQuizService } from './services/gets-user-quiz/gets-user-quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserQuizEntity } from 'src/typeorm/entities/user-quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserQuizEntity])],
  controllers: [GetsUserQuizController, PutsUserQuizController],
  providers: [PutsUserQuizService, GetsUserQuizService]
})
export class UserQuizModule { }
