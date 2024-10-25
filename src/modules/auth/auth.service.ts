import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import { Md5 } from 'ts-md5';
import { AuthGuard } from './auth.guard';

@Injectable()
export class AuthService {
  private jwtSecret: string;
  private jwtExperationTimeInSeconds: number;
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly usersService: UserService,
  ) {
    this.jwtExperationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
    this.jwtSecret = this.configService.get<string>('JWT_SECRET');
  }
  async signIn(login: LoginDto) {
    const encrypted_password = Md5.hashStr(login.password);
    const foundUser = await this.usersService.findUserByEmail(login.email);
    if (!foundUser || encrypted_password != foundUser.senha) {
      throw new UnauthorizedException('Senha ou login incorretos');
    }

    const payload = {
      sub: foundUser.id,
      email: foundUser.email,
    };

    const token = this.jwtService.sign(payload);

    delete foundUser.senha;
    delete foundUser.cartaoBandeira;
    delete foundUser.cartaoTitular;
    delete foundUser.cartaoToken;
    delete foundUser.cartaoTruncado;
    return { token, foundUser };
  }

  async verifyToken(token: string) {
    const result = await this.jwtService.verifyAsync(token, {
      secret: this.jwtSecret,
    });
    console.log(result.sub);
  }
}
