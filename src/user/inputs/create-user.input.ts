import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
class CreateUserInput {
  @IsOptional()
  @Field()
  name?: string;

  @IsOptional()
  @Field()
  email?: string;

  @IsOptional()
  @Field()
  password?: string;
}

export default CreateUserInput;
