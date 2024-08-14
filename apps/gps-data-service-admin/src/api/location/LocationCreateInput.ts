import { PictureCreateNestedManyWithoutLocationsInput } from "./PictureCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  description?: string | null;
  name?: string | null;
  pictures?: PictureCreateNestedManyWithoutLocationsInput;
};
