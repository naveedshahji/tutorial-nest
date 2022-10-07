import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';

@InputType()
export class DeleteDealInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: string;
}
