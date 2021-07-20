import { ForbiddenException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import UsersRepository from '../repositories/users-repository';

@Injectable()
class DeleteUserService {
  constructor(private usersRepository: UsersRepository) {}
  async delete(id: string): Promise<true> {
    const UserAlreadyExists = this.usersRepository.findOneOrFail(id);
    if (UserAlreadyExists) throw new ForbiddenException('User not Exists');
    await this.usersRepository.delete(id);
    return true;
  }
}

export default DeleteUserService;
