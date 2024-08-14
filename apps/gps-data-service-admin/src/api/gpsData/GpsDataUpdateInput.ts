import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GpsDataUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
