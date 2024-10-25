import { Body, Controller, Header, Headers, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(@Body() login: LoginDto) {
    return this.authService.signIn(login);
  }

  @Post('verifyToken')
  verifyToken(@Headers('authorization') token: string) {
    return this.authService.verifyToken(token);
  }
}
