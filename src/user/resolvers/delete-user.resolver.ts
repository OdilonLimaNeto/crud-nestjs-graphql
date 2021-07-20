import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import User from '../entities/users.entity';
import DeleteUserService from '../services/delete-user.service';

@Resolver(() => User)
class DeleteUserResolver {
  constructor(private deleteUserService: DeleteUserService) {}
  @Mutation(() => Boolean)
  async delete(@Args('id', { type: () => ID }) id: User['id']): Promise<true> {
    return await this.deleteUserService.delete(id);
  }
}

export default DeleteUserResolver;
