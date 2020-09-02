import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
} from "react-admin";

const CurrentStatusField = ({ source, record = {} }) => {
  return `${record.current_status == "open" ? "Abierta" : "Cerrada"} `;
};

CurrentStatusField.defaultProps = { label: "Estado" };

const currentStatus = [
  { id: "open", name: "Abierta" },
  { id: "close", name: "Cerrada" },
];

const status = [
  { id: "Activa", name: "Activa" },
  { id: "Desactivada", name: "Inactiva" },
];

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Buscador" source="search" alwaysOn />
    <SelectInput
      fullWidth
      source="current_status"
      label="Estado"
      choices={currentStatus}
      optionText="name"
      optionValue="id"
      alwaysOn
    />
    <SelectInput
      fullWidth
      source="status"
      label="Estado actual"
      choices={status}
      optionText="name"
      optionValue="id"
      alwaysOn
    />
  </Filter>
);

const ShopList = (props) => {
  return (
    <List {...props} filters={<Filters />} exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="name" label="Nombre" />
        <TextField source="nit" label="Nit" />
        <CurrentStatusField />
        <TextField source="status" label="Estado" />
        <TextField source="phone" label="Telefono" />
        <TextField source="category.name" label="Categoria" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
