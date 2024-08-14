import { SortOrder } from "../../util/SortOrder";

export type GpsDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};