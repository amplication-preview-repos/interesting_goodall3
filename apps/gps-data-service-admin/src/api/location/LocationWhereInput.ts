import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PictureListRelationFilter } from "../picture/PictureListRelationFilter";

export type LocationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pictures?: PictureListRelationFilter;
};
