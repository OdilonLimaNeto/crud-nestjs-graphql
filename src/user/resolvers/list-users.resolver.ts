import { Args, Query, Resolver } from '@nestjs/graphql';
import User from '../entities/users.entity';
import ListFilterUserInput from '../inputs/list-filter.input';
import ListUsersService from '../services/list-users.service';
//TODO: corrigir tipos de filtragem
@Resolver(() => User)
class ListUsersResolver {
  constructor(private usersService: ListUsersService) {}

  @Query(() => [User])
  async list(
    @Args('input', { nullable: true }) input?: ListFilterUserInput,
  ): Promise<User[]> {
    const listAllUsers = await this.usersService.list(input as string);
    return listAllUsers;
  }
}

export default ListUsersResolver;
