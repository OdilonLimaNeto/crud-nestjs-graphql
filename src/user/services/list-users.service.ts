import { Injectable } from '@nestjs/common';
import { FindOperator, Like } from 'typeorm';
import User from '../entities/users.entity';
import UsersRepository from '../repositories/users-repository';

@Injectable()
class ListUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async list(name?: string): Promise<User[]> {
    const filters: { name?: FindOperator<string> } = {};
    if (name) {
      filters.name = Like(`%${name}%`);
    }
    const allUsers = await this.usersRepository.find(filters);
    return allUsers;
  }
}

export default ListUsersService;
