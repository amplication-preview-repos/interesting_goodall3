import * as graphql from "@nestjs/graphql";
import { GpsDataResolverBase } from "./base/gpsData.resolver.base";
import { GpsData } from "./base/GpsData";
import { GpsDataService } from "./gpsData.service";

@graphql.Resolver(() => GpsData)
export class GpsDataResolver extends GpsDataResolverBase {
  constructor(protected readonly service: GpsDataService) {
    super(service);
  }
}
