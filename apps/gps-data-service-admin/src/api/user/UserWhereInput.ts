import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GpsDataListRelationFilter } from "../gpsData/GpsDataListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gpsDataItems?: GpsDataListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
