import { Module } from "@nestjs/common";
import { PicturesModuleService } from "./picturesmodule.service";
import { PicturesModuleController } from "./picturesmodule.controller";
import { PicturesModuleResolver } from "./picturesmodule.resolver";

@Module({
  controllers: [PicturesModuleController],
  providers: [PicturesModuleService, PicturesModuleResolver],
  exports: [PicturesModuleService],
})
export class PicturesModuleModule {}
