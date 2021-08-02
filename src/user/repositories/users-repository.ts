import { EntityRepository, getRepository, Repository } from 'typeorm';
import User from '../entities/users.entity';
import CreateUserInput from '../inputs/create-user.input';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  private repository: Repository<User>;

  constructor() {
    super();
    this.repository = getRepository(User);
  }

  async createUser(input: CreateUserInput) {
    const userToCreate = this.repository.create(input);
    const createdUser = await this.repository.save(userToCreate);
    return createdUser;
  }
}

export default UsersRepository;
