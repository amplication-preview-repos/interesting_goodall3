import * as graphql from "@nestjs/graphql";
import { IngestGpsDataDto } from "../gpsModule/IngestGpsDataDto";
import { GpsModuleService } from "./gpsmodule.service";

export class GpsModuleResolver {
  constructor(protected readonly service: GpsModuleService) {}

  @graphql.Mutation(() => String)
  async IngestGpsData(
    @graphql.Args()
    args: IngestGpsDataDto
  ): Promise<string> {
    return this.service.IngestGpsData(args);
  }
}
