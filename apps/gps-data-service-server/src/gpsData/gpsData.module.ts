import { Module } from "@nestjs/common";
import { GpsDataModuleBase } from "./base/gpsData.module.base";
import { GpsDataService } from "./gpsData.service";
import { GpsDataController } from "./gpsData.controller";
import { GpsDataResolver } from "./gpsData.resolver";

@Module({
  imports: [GpsDataModuleBase],
  controllers: [GpsDataController],
  providers: [GpsDataService, GpsDataResolver],
  exports: [GpsDataService],
})
export class GpsDataModule {}
