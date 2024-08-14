import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PicturesModuleService } from "./picturesmodule.service";
import { UploadPictureDto } from "../picturesModule/UploadPictureDto";

@swagger.ApiTags("picturesModules")
@common.Controller("picturesModules")
export class PicturesModuleController {
  constructor(protected readonly service: PicturesModuleService) {}

  @common.Post("/pictures")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPicture(
    @common.Body()
    body: UploadPictureDto
  ): Promise<string> {
        return this.service.UploadPicture(body);
      }
}
