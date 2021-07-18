import { Args, Mutation, Resolver } from '@nestjs/graphql';
import CreateUserInput from '../inputs/create-user.input';
import User from '../entities/users.entity';
import CreateUserService from '../services/create-user.service';

@Resolver(() => User)
class CreateUserResolver {
  constructor(private usersService: CreateUserService) {}

  @Mutation(() => User)
  async create(@Args('input') input: CreateUserInput): Promise<User> {
    const newUser = await this.usersService.create(input);
    return newUser;
  }
}

export default CreateUserResolver;
