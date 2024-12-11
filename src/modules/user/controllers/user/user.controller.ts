import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UserEntity } from 'src/typeorm/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUsers(): Promise<Array<UserEntity>> {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(user);
  }
}
