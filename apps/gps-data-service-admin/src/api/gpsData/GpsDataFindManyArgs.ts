import { GpsDataWhereInput } from "./GpsDataWhereInput";
import { GpsDataOrderByInput } from "./GpsDataOrderByInput";

export type GpsDataFindManyArgs = {
  where?: GpsDataWhereInput;
  orderBy?: Array<GpsDataOrderByInput>;
  skip?: number;
  take?: number;
};
