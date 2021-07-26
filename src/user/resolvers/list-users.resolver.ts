import { Args, Query, Resolver } from '@nestjs/graphql';
import User from '../entities/users.entity';
import ListUsersService from '../services/list-users.service';
@Resolver(() => User)
class ListUsersResolver {
  constructor(private usersService: ListUsersService) {}

  @Query(() => [User])
  async list(@Args('name', { nullable: true }) name?: string): Promise<User[]> {
    const listAllUsers = await this.usersService.list(name);
    return listAllUsers;
  }
}

export default ListUsersResolver;
