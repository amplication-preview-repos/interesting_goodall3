import { Picture } from "../picture/Picture";

export type Location = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  pictures?: Array<Picture>;
  updatedAt: Date;
};
