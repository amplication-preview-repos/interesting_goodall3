import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PictureWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
