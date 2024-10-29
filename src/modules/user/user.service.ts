import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IUser } from "./user.interace";
import { UserWithIdDto } from "./dtos/userCreate.dto";
import { v4 as uuid } from 'uuid';
import { User } from "./user";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) { }

  createUser(user: IUser) {
    const created_user = this.userRepository.create(user);
    return this.userRepository.save(created_user);
  }

  async findUsers(): Promise<IUser[]> {
    const result = await this.userRepository.find();
    return result;
  }

  async findUserById(id: string) {
    return this.userRepository.findOneById(id);
  }

  async findUserByEmail(email: string): Promise<User> {
    const result = await this.userRepository.findOneBy({ email });
    return result;
  }
}
