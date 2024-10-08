import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser } from "./user.interace";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Post()
  async createUser(@Body() user: IUser){
    return this.userService.createUser(user);
  }

  @Get()
  async findUsers(): Promise<IUser[]>{
    return this.userService.findUsers();   
  }
}
