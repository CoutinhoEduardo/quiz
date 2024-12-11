import { Module } from '@nestjs/common';
import { GetsAuthService } from './services/gets-auth/gets-auth.service';
import { PostsAuthService } from './services/posts-auth/posts-auth.service';
import { PostsAuthController } from './controllers/posts-auth/posts-auth.controller';
import { GetsAuthController } from './controllers/gets-auth/gets-auth.controller';
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME') }
      }),
      inject: [ConfigService]
    })],
  providers: [PostsAuthService, GetsAuthService, AuthGuard],
  controllers: [PostsAuthController, GetsAuthController],
  exports: [AuthModule, AuthGuard]
})
export class AuthModule { }
