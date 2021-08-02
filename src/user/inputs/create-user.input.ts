import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @IsOptional()
  @Field()
  password: string;
}

export default CreateUserInput;
