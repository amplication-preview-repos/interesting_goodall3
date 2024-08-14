import { PictureUpdateManyWithoutLocationsInput } from "./PictureUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  description?: string | null;
  name?: string | null;
  pictures?: PictureUpdateManyWithoutLocationsInput;
};
