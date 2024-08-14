/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GpsDataWhereUniqueInput } from "./GpsDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GpsDataUpdateInput } from "./GpsDataUpdateInput";

@ArgsType()
class UpdateGpsDataArgs {
  @ApiProperty({
    required: true,
    type: () => GpsDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GpsDataWhereUniqueInput)
  @Field(() => GpsDataWhereUniqueInput, { nullable: false })
  where!: GpsDataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GpsDataUpdateInput,
  })
  @ValidateNested()
  @Type(() => GpsDataUpdateInput)
  @Field(() => GpsDataUpdateInput, { nullable: false })
  data!: GpsDataUpdateInput;
}

export { UpdateGpsDataArgs as UpdateGpsDataArgs };
