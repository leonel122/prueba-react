import React from "react";
import {
  List,
  Datagrid,
  TextField,
  SelectInput,
  ShowButton,
  Filter,
  TextInput,
  DateField,
} from "react-admin";

const Status = [
  { id: 1, name: "Pendiente" },
  { id: 2, name: "Aceptado" },
  { id: 3, name: "Enviado" },
  { id: 4, name: "Rechazado" },
  { id: 5, name: "Entregado" },
];

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Busca lo que quieras" source="search" alwaysOn />
    <SelectInput
      fullWidth
      source="order_status_id"
      label="Estado"
      choices={Status}
      optionText="name"
      optionValue="id"
      alwaysOn
    />
  </Filter>
);

const UserNameField = ({ source, record = {} }) => {
  return `${record.user.first_name} ${record.user.last_name} `;
};

const StatusField = ({ source, record = {} }) => {
  return `${
    record.order_status_id == 1
      ? "Pendiente"
      : record.order_status_id == 2
      ? "Aceptado"
      : record.order_status_id == 3
      ? "Enviado"
      : "Rechazado"
  } `;
};

const orderList = ({ permissions, ...props }) => {
  return (
    <List
      {...props}
      filters={<Filters />}
      sort={{ field: "createdAt", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" label="id" />
        {permissions === "admin" && (
          <TextField source="shop.name" label="Tienda" />
        )}
        <UserNameField label="Cliente" />
        <TextField source="user.phone" label="Telefono" />
        <StatusField label="Estado" />
        <DateField source="createdAt" label="fecha" />
        <TextField source="value" />
        <TextField source="shipping_cost" label="costo de envio" />
        <ShowButton label="Ver" />
      </Datagrid>
    </List>
  );
};

export default orderList;
