import { Location } from "../location/Location";

export type Picture = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  timestamp: Date | null;
  updatedAt: Date;
  url: string | null;
};
