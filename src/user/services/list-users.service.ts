import { Injectable } from '@nestjs/common';
import { FindOperator, Like } from 'typeorm';
import User from '../entities/users.entity';
import UsersRepository from '../repositories/users-repository';

@Injectable()
class ListUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async list(id?: string, name?: string, email?: string): Promise<User[]> {
    const filters: {
      id?: FindOperator<string>;
      name?: FindOperator<string>;
      email?: FindOperator<string>;
    } = {};

    if (id) filters.id = Like(`${id}%`);
    if (name) filters.name = Like(`${name}%`);
    if (email) filters.email = Like(`${email}%`);

    return this.usersRepository.find(filters);
  }
}

export default ListUsersService;
