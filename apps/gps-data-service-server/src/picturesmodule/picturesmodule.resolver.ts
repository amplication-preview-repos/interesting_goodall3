import * as graphql from "@nestjs/graphql";
import { UploadPictureDto } from "../picturesModule/UploadPictureDto";
import { PicturesModuleService } from "./picturesmodule.service";

export class PicturesModuleResolver {
  constructor(protected readonly service: PicturesModuleService) {}

  @graphql.Mutation(() => String)
  async UploadPicture(
    @graphql.Args()
    args: UploadPictureDto
  ): Promise<string> {
    return this.service.UploadPicture(args);
  }
}
