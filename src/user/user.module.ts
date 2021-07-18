import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CreateUserResolver from './resolvers/create-user.resolver';
import ListUsersResolver from './resolvers/list-users.resolver';
import CreateUserService from './services/create-user.service';
import ListUsersService from './services/list-users.service';
import UsersRepository from './repositories/users-repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [
    CreateUserService,
    CreateUserResolver,
    ListUsersService,
    ListUsersResolver,
  ],
})
export class UserModule {}
