import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";

export const PictureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
