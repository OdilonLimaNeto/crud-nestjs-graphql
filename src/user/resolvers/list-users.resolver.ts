import { Args, Query, Resolver } from '@nestjs/graphql';
import User from '../entities/users.entity';
import FilterListInput from '../inputs/list-filter.input';
import ListUsersService from '../services/list-users.service';
@Resolver(() => User)
class ListUsersResolver {
  constructor(private usersService: ListUsersService) {}

  @Query(() => [User])
  async list(
    @Args('name', { nullable: true }) name?: string,
    @Args('email', { nullable: true }) email?: string,
  ): Promise<User[]> {
    const listAllUsers = await this.usersService.list(name, email);
    return listAllUsers;
  }
}

export default ListUsersResolver;
