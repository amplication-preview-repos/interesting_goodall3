import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type PictureUpdateInput = {
  location?: LocationWhereUniqueInput | null;
  timestamp?: Date | null;
  url?: string | null;
};
