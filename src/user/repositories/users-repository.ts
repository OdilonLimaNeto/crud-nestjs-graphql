import {
  EntityRepository,
  FindOperator,
  getRepository,
  ILike,
  Like,
  Repository,
} from 'typeorm';
import User from '../entities/users.entity';
import CreateUserInput from '../inputs/create-user.input';
import FilterListInput from '../inputs/list-filter.input';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  private repository: Repository<User>;

  constructor() {
    super();
    this.repository = getRepository(User);
  }

  async createUser(input: CreateUserInput): Promise<User> {
    const userToCreate = this.repository.create(input);
    const createdUser = await this.repository.save(userToCreate);
    return createdUser;
  }

  async listAllUsers(
    name?: FilterListInput['name'],
    email?: FilterListInput['email'],
  ): Promise<User[]> {
    const filters: {
      name?: FindOperator<string>;
      email?: FindOperator<string>;
    } = {};
    if (name) {
      filters.name = ILike(`%${name}%`);
    }

    if (email) {
      filters.email = ILike(`%${email}%`);
    }

    const allUsers = await this.repository.find({ where: filters });

    return allUsers;
  }
}

export default UsersRepository;
