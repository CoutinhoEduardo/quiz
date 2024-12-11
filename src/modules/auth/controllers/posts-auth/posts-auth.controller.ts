import { Body, Controller, Post, Headers } from '@nestjs/common';
import { PostsAuthService } from '../../services/posts-auth/posts-auth.service';
import { LoginDto } from '../../dtos/login.dto';

@Controller('auth')
export class PostsAuthController {
  constructor(private readonly postAuthService: PostsAuthService) { }


  @Post()
  login(@Body() login: LoginDto) {
    return this.postAuthService.signIn(login);
  }

  @Post('verifyToken')
  verifyToken(@Headers('authorization') token: string) {
    return this.postAuthService.verifyToken(token);
  }
}
