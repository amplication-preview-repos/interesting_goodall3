/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PictureWhereUniqueInput } from "../../picture/base/PictureWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PictureUpdateManyWithoutLocationsInput {
  @Field(() => [PictureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PictureWhereUniqueInput],
  })
  connect?: Array<PictureWhereUniqueInput>;

  @Field(() => [PictureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PictureWhereUniqueInput],
  })
  disconnect?: Array<PictureWhereUniqueInput>;

  @Field(() => [PictureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PictureWhereUniqueInput],
  })
  set?: Array<PictureWhereUniqueInput>;
}

export { PictureUpdateManyWithoutLocationsInput as PictureUpdateManyWithoutLocationsInput };
