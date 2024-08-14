import { Module } from "@nestjs/common";
import { GpsModuleService } from "./gpsmodule.service";
import { GpsModuleController } from "./gpsmodule.controller";
import { GpsModuleResolver } from "./gpsmodule.resolver";

@Module({
  controllers: [GpsModuleController],
  providers: [GpsModuleService, GpsModuleResolver],
  exports: [GpsModuleService],
})
export class GpsModuleModule {}
