import { Injectable } from '@nestjs/common';
import User from '../entities/users.entity';
import UsersRepository from '../repositories/users-repository';

@Injectable()
class ListUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async list(): Promise<User[]> {
    const allUsers = this.usersRepository.find();
    return allUsers;
  }
}

export default ListUsersService;
