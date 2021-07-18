import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/users.entity';

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export default UsersRepository;
