import { GpsDataCreateNestedManyWithoutUsersInput } from "./GpsDataCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  gpsDataItems?: GpsDataCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
