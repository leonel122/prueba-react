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

const Status = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "Inactivo" },
];

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="prioridad" source="priority" alwaysOn />
    <SelectInput
      fullWidth
      source="status"
      label="Estado"
      choices={Status}
      optionText="name"
      optionValue="id"
      alwaysOn
    />
  </Filter>
);

const StatusField = ({ source, record = {} }) => {
  return `${record.status == "active" ? "Activo" : "Inactivo"} `;
};

const ShopList = (props) => {
  return (
    <List {...props} filters={<Filters />} exporter={true}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="destination_id" label="Id del destino" />
        {/* <TextField source="destination_location" label="Tipo de destino" /> */}
        <TextField source="destination_location" label="Tipo de destino" />
        <StatusField source="status" label="Estado" />
        <TextField source="date" label="Fecha" />
        <TextField source="priority" label="Prioridad" />
        {/* <TextField source="value" label="precio" /> */}
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
