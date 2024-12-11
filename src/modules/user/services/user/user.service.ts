import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/create-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

  getUsers(): Promise<Array<UserEntity>> {
    return this.userRepository.find();
  }

  createUser(user: CreateUserDto): Promise<UserEntity> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const result = await this.userRepository.findOneBy({ email });
    return result;
  }


  async findUserById(id: string) {
    return this.userRepository.findOneById(id);
  }
}
