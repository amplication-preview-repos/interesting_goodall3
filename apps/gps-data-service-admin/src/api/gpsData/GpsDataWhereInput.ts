import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GpsDataWhereInput = {
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
