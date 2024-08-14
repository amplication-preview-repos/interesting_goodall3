/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GpsDataService } from "../gpsData.service";
import { GpsDataCreateInput } from "./GpsDataCreateInput";
import { GpsData } from "./GpsData";
import { GpsDataFindManyArgs } from "./GpsDataFindManyArgs";
import { GpsDataWhereUniqueInput } from "./GpsDataWhereUniqueInput";
import { GpsDataUpdateInput } from "./GpsDataUpdateInput";

export class GpsDataControllerBase {
  constructor(protected readonly service: GpsDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GpsData })
  async createGpsData(
    @common.Body() data: GpsDataCreateInput
  ): Promise<GpsData> {
    return await this.service.createGpsData({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GpsData] })
  @ApiNestedQuery(GpsDataFindManyArgs)
  async gpsDataItems(@common.Req() request: Request): Promise<GpsData[]> {
    const args = plainToClass(GpsDataFindManyArgs, request.query);
    return this.service.gpsDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GpsData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async gpsData(
    @common.Param() params: GpsDataWhereUniqueInput
  ): Promise<GpsData | null> {
    const result = await this.service.gpsData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GpsData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGpsData(
    @common.Param() params: GpsDataWhereUniqueInput,
    @common.Body() data: GpsDataUpdateInput
  ): Promise<GpsData | null> {
    try {
      return await this.service.updateGpsData({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          timestamp: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GpsData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGpsData(
    @common.Param() params: GpsDataWhereUniqueInput
  ): Promise<GpsData | null> {
    try {
      return await this.service.deleteGpsData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          timestamp: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}