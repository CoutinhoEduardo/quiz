import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { UserEntity } from './typeorm/entities/user.entity';
import { QuizModule } from './modules/quiz/quiz.module';
import { AnswerModule } from './modules/answer/answer.module';
import { QuizEntity } from './typeorm/entities/quiz.entity';
import { AnswerEntity } from './typeorm/entities/answer.entity';
import { AuthModule } from './modules/auth/auth.module';
import { UserQuizModule } from './modules/user_quiz/user_quiz.module';
import { EmpresaEntity } from './typeorm/entities/empresas.entity';
import { EmpresaDepartamentoEntity } from './typeorm/entities/empresa-departamento.entity';
import { PedidosEntity } from './typeorm/entities/pedidos.entity';
import { PedidosLoginsEntity } from './typeorm/entities/pedidos-logins.entity';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { UtilModule } from './modules/util/util.module';
import { ConsultorDepartamentoEntity } from './typeorm/entities/consultores_departamento.entity';
import { UserQuizEntity } from './typeorm/entities/user-quiz.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'quiz',
        entities: [
          UserEntity,
          UserQuizEntity,
          QuizEntity,
          AnswerEntity,
          EmpresaEntity,
          EmpresaDepartamentoEntity,
          PedidosEntity,
          PedidosLoginsEntity,
          ConsultorDepartamentoEntity
        ],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    UserModule,
    QuizModule,
    AnswerModule,
    AuthModule,
    UserQuizModule,
    EmpresaModule,
    UtilModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
