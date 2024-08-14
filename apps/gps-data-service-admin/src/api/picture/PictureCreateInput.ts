import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type PictureCreateInput = {
  location?: LocationWhereUniqueInput | null;
  timestamp?: Date | null;
  url?: string | null;
};
