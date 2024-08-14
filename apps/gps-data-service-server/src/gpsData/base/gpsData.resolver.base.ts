/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { GpsData } from "./GpsData";
import { GpsDataCountArgs } from "./GpsDataCountArgs";
import { GpsDataFindManyArgs } from "./GpsDataFindManyArgs";
import { GpsDataFindUniqueArgs } from "./GpsDataFindUniqueArgs";
import { CreateGpsDataArgs } from "./CreateGpsDataArgs";
import { UpdateGpsDataArgs } from "./UpdateGpsDataArgs";
import { DeleteGpsDataArgs } from "./DeleteGpsDataArgs";
import { User } from "../../user/base/User";
import { GpsDataService } from "../gpsData.service";
@graphql.Resolver(() => GpsData)
export class GpsDataResolverBase {
  constructor(protected readonly service: GpsDataService) {}

  async _gpsDataItemsMeta(
    @graphql.Args() args: GpsDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GpsData])
  async gpsDataItems(
    @graphql.Args() args: GpsDataFindManyArgs
  ): Promise<GpsData[]> {
    return this.service.gpsDataItems(args);
  }

  @graphql.Query(() => GpsData, { nullable: true })
  async gpsData(
    @graphql.Args() args: GpsDataFindUniqueArgs
  ): Promise<GpsData | null> {
    const result = await this.service.gpsData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GpsData)
  async createGpsData(
    @graphql.Args() args: CreateGpsDataArgs
  ): Promise<GpsData> {
    return await this.service.createGpsData({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => GpsData)
  async updateGpsData(
    @graphql.Args() args: UpdateGpsDataArgs
  ): Promise<GpsData | null> {
    try {
      return await this.service.updateGpsData({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GpsData)
  async deleteGpsData(
    @graphql.Args() args: DeleteGpsDataArgs
  ): Promise<GpsData | null> {
    try {
      return await this.service.deleteGpsData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: GpsData): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
