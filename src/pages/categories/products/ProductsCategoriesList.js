import React from "react";
import { List, Datagrid, TextField, EditButton, ShowButton } from "react-admin";

export const ProductsCategoriesList = props => (
  <List {...props} exporter={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
