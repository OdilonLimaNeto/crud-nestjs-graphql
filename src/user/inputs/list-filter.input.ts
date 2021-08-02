import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import CreateUserInput from './create-user.input';

@InputType()
export class FilterListInput extends PartialType(
  OmitType(CreateUserInput, ['password']),
) {}

export default FilterListInput;
