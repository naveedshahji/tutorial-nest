import { Field, InputType } from "@nestjs/graphql";
import exp from "constants";
import { isNamedType } from "graphql";
import { IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class AddDealInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    link: string;
}