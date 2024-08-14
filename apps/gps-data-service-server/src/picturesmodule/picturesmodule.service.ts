import { Injectable } from "@nestjs/common";
import { UploadPictureDto } from "../picturesModule/UploadPictureDto";

@Injectable()
export class PicturesModuleService {
  constructor() {}
  async UploadPicture(args: UploadPictureDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
