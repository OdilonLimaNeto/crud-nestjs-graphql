import { Injectable } from '@nestjs/common';
import User from '../entities/users.entity';
import FilterListInput from '../inputs/list-filter.input';
import UsersRepository from '../repositories/users-repository';

@Injectable()
class ListUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async list(
    name?: FilterListInput['name'],
    email?: FilterListInput['email'],
  ): Promise<User[]> {
    return this.usersRepository.listAllUsers(name, email);
  }
}

export default ListUsersService;
