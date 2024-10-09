
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  private jwtSecret: string;
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private reflector: Reflector,
  ) {
    this.jwtSecret = this.configService.get<string>('JWT_SECRET');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.exctractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException("Usuário não logado");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.jwtSecret,
      });
      const canAccess = payload.sub;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private exctractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async extractUserFromHeader(request: Request) {
    const token = this.exctractTokenFromHeader(request);
    const payload = await this.jwtService.verifyAsync(token, {
      secret: this.jwtSecret
    });
    return payload.sub;
  }

}
