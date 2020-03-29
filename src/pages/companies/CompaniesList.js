import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  Filter,
  TextInput,
  ReferenceField
} from "react-admin";
import { Link } from "react-router-dom";

const CompanyFilter = props => (
  <Filter {...props}>
    <TextInput label="Razón social" source="name" alwaysOn />
  </Filter>
);

const CompaniesList = props => {
  return (
    <List {...props} filters={<CompanyFilter />} exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="name" label="Razón social" />
        <TextField source="nit" label="Nit" />
        <TextField source="status" label="Estado" />
        <TextField source="membership.name" label="Membresia" />
        <TextField source="type" label="Tipo" />
        <TextField source="type_service" label="type_service" />
        <EditButton label="Editar" />
        <ShowButton label="Ver" />
      </Datagrid>
    </List>
  );
};

export default CompaniesList;
