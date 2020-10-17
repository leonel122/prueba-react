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
import { Title } from "./";
import { URL_S3 } from "../../constants";

const Status = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "Inactivo" },
];

const StatusField = ({ source, record = {}, ...props }) => {
  return (
    <p
      style={{
        color: record.status == "active" ? "green" : "#FF9C33",
        fontWeight: "bold",
      }}
    >
      {record.status == "active" ? "activo" : "Inactivo"}
    </p>
  );
};
const ImageField = ({ record }) => {
  return (
    record.image && (
      <img width="60px" height="60px" src={`${URL_S3}${record.image}`} />
    )
  );
};

ImageField.defaultProps = { label: "Imagen" };

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

const ShopList = ({ permissions, ...props }) => {
  return (
    <List
      {...props}
      filters={<Filters />}
      // exporter={true}
      title={<Title />}
      bulkActionButtons={false}
    >
      <Datagrid>
        {permissions === "admin" && <TextField source="id" label="id" />}
        <ImageField />
        <TextField source="name" label="Nombre" />
        {/* <StatusField source="status" label="Estado" /> */}
        {permissions === "admin" && (
          <TextField source="shop.name" label="Tienda" />
        )}
        <TextField source="value" label="precio" />
        {/* <TextField source="quantity" label="Cantidad" /> */}
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
