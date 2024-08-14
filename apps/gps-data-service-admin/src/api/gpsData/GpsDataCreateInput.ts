import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GpsDataCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
