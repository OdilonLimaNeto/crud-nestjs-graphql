import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import User from '../entities/users.entity';
import UpdateUserInput from '../inputs/update-user.input';
import UpdateUserService from '../services/update-user.service';

@Resolver(() => User)
class UpdateUserResolver {
  constructor(private updateUserService: UpdateUserService) {}
  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => ID }) id: User['id'],
    @Args('input') input: UpdateUserInput,
  ): Promise<User> {
    const updatedUser = await this.updateUserService.update(id, input);
    return updatedUser;
  }
}

export default UpdateUserResolver;
