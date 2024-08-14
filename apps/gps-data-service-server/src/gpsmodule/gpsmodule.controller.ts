import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GpsModuleService } from "./gpsmodule.service";
import { IngestGpsDataDto } from "../gpsModule/IngestGpsDataDto";

@swagger.ApiTags("gpsModules")
@common.Controller("gpsModules")
export class GpsModuleController {
  constructor(protected readonly service: GpsModuleService) {}

  @common.Post("/gpsdata")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IngestGpsData(
    @common.Body()
    body: IngestGpsDataDto
  ): Promise<string> {
        return this.service.IngestGpsData(body);
      }
}
