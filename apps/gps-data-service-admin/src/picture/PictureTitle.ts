import { Picture as TPicture } from "../api/picture/Picture";

export const PICTURE_TITLE_FIELD = "url";

export const PictureTitle = (record: TPicture): string => {
  return record.url?.toString() || String(record.id);
};
