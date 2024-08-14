import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GpsDataServiceBase } from "./base/gpsData.service.base";

@Injectable()
export class GpsDataService extends GpsDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
