import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class IngestGpsDataDto {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    latitude!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    longitude!: number;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;
}

export { IngestGpsDataDto as IngestGpsDataDto };