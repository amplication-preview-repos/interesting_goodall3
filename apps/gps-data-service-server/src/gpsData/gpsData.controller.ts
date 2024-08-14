import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GpsDataService } from "./gpsData.service";
import { GpsDataControllerBase } from "./base/gpsData.controller.base";

@swagger.ApiTags("gpsData")
@common.Controller("gpsData")
export class GpsDataController extends GpsDataControllerBase {
  constructor(protected readonly service: GpsDataService) {
    super(service);
  }
}
