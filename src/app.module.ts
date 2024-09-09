import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Quiz } from './modules/quiz/quiz.entity';
import { AnswerModule } from './modules/answer/answer.module';
import { AnswerEntity } from './modules/answer/answer.entity';
@Module({
  imports: [
    QuizModule, 
    AnswerModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:(configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'quiz',
        entities: [
            Quiz, AnswerEntity
        ],
        synchronize: true,
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
