import { ForbiddenException, Injectable } from '@nestjs/common';
import User from '../entities/users.entity';
import UpdateUserInput from '../inputs/update-user.input';
import UsersRepository from '../repositories/users-repository';

@Injectable()
class UpdateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async update(id: User['id'], input: UpdateUserInput): Promise<User> {
    const user = await this.usersRepository.findOneOrFail(id);

    if (!user) throw new ForbiddenException('User not exists!');

    const userToUpdate = Object.assign<User, UpdateUserInput>(user, input);

    return this.usersRepository.save(userToUpdate);
  }
}

export default UpdateUserService;
