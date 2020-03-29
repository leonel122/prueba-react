import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  ReferenceField
} from "react-admin";

const DealsList = props => (
  <List {...props} exporter={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField
        label="Propietaria"
        source="owner_company_id"
        reference="companies"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="product_or_service" label="Tipo" />
      <TextField source="status" label="Estado" />
      <ShowButton label="Ver" />
    </Datagrid>
  </List>
);

export default DealsList;
