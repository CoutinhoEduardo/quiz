import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtExperationTimeInSeconds: number;
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExperationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }
  async signIn() {
    const payload = {
      sub: "1",
      name: "2321",
    };

    const token = this.jwtService.sign(payload);

    return  token;
  }
}

