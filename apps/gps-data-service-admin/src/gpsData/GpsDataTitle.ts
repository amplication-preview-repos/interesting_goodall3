import { GpsData as TGpsData } from "../api/gpsData/GpsData";

export const GPSDATA_TITLE_FIELD = "id";

export const GpsDataTitle = (record: TGpsData): string => {
  return record.id?.toString() || String(record.id);
};
