import { Injectable } from '@nestjs/common';
import CreateUserInput from '../inputs/create-user.input';
import User from '../entities/users.entity';
import UsersRepository from '../repositories/users-repository';
import * as bcrypt from 'bcrypt';

@Injectable()
class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async create(input: CreateUserInput): Promise<User> {
    const isHashPassword = await bcrypt.hash(input.password, 8);
    input.password = isHashPassword;
    const userToCreated = this.usersRepository.create(input);
    const createdUser = await this.usersRepository.save(userToCreated);

    return createdUser;
  }
}

export default CreateUserService;
