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
    <TextInput label="Nombre" source="search" alwaysOn />
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

const ShopList = ({ permissions, ...props }) => {
  return (
    <List {...props} filters={<Filters />} exporter={true}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="name" label="Nombre" />
        <StatusField source="status" label="Estado" />
        {permissions === "admin" && (
          <TextField source="shop.name" label="Tienda" />
        )}
        <TextField source="value" label="precio" />
        <TextField source="quantity" label="Cantidad" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
