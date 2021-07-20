import { Field, InputType } from '@nestjs/graphql';

@InputType()
class ListFilterUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}

export default ListFilterUserInput;
