import { Injectable } from "@nestjs/common";
import { IngestGpsDataDto } from "../gpsModule/IngestGpsDataDto";

@Injectable()
export class GpsModuleService {
  constructor() {}
  async IngestGpsData(args: IngestGpsDataDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
