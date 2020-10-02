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
import { Title } from "./";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Status = [
  { id: 1, name: "Pendiente por aceptar" },
  { id: 2, name: "Preparando productos" },
  { id: 3, name: "Enviada" },
  { id: 4, name: "Rechazada" },
  { id: 5, name: "Entregada" },
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

const StatusField = ({ source, record = {}, ...props }) => {
  return (
    <p
      style={{
        color:
          record.order_status_id == 1
            ? "green"
            : record.order_status_id == 2
            ? "#FF9C33"
            : record.order_status_id == 3
            ? "green"
            : record.order_status_id == 4
            ? "red"
            : record.order_status_id == 5
            ? "green"
            : "red",
        fontWeight: "bold",
      }}
    >
      {record.order_status_id == 1
        ? "Pendiente por aceptar"
        : record.order_status_id == 2
        ? "Preparando productos"
        : record.order_status_id == 3
        ? "Enviada"
        : record.order_status_id == 4
        ? "Rechazada"
        : record.order_status_id == 5
        ? "Entregada"
        : "Cancelada"}
    </p>
  );
};

const orderList = ({ permissions, ...props }) => {
  return (
    <List
      {...props}
      filters={<Filters />}
      sort={{ field: "createdAt", order: "DESC" }}
      title={<Title />}
    >
      <Datagrid>
        <TextField source="id" label="id" />
        {permissions === "admin" && (
          <TextField source="shop.name" label="Tienda" />
        )}
        <UserNameField label="Cliente" />
        <TextField source="user.phone" label="Teléfono" />
        <StatusField label="Estado" />
        <DateField source="createdAt" label="Fecha" />
        <TextField source="value" label="Valor" />
        <TextField source="shipping_cost" label="Costo de envío" />
        <ShowButton label="Ver" />
      </Datagrid>
    </List>
  );
};

export default orderList;
