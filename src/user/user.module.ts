import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CreateUserResolver from './resolvers/create-user.resolver';
import ListUsersResolver from './resolvers/list-users.resolver';
import CreateUserService from './services/create-user.service';
import ListUsersService from './services/list-users.service';
import UsersRepository from './repositories/users-repository';
import DeleteUserService from './services/delete-user.service';
import DeleteUserResolver from './resolvers/delete-user.resolver';
import UpdateUserService from './services/update-user.service';
import UpdateUserResolver from './resolvers/update-user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [
    CreateUserService,
    CreateUserResolver,
    ListUsersService,
    ListUsersResolver,
    DeleteUserService,
    DeleteUserResolver,
    UpdateUserService,
    UpdateUserResolver,
  ],
})
export class UserModule {}
