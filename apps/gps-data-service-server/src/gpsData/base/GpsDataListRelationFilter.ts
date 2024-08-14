/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GpsDataWhereInput } from "./GpsDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GpsDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GpsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => GpsDataWhereInput)
  @IsOptional()
  @Field(() => GpsDataWhereInput, {
    nullable: true,
  })
  every?: GpsDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => GpsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => GpsDataWhereInput)
  @IsOptional()
  @Field(() => GpsDataWhereInput, {
    nullable: true,
  })
  some?: GpsDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => GpsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => GpsDataWhereInput)
  @IsOptional()
  @Field(() => GpsDataWhereInput, {
    nullable: true,
  })
  none?: GpsDataWhereInput;
}
export { GpsDataListRelationFilter as GpsDataListRelationFilter };