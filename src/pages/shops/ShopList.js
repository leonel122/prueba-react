import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  ReferenceField,
} from "react-admin";
import { Title } from "./";
import { URL_S3 } from "../../constants";
import { shopService } from "../../utils/Api";

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

const ImageField = ({ record }) => {
  return (
    record.logo && (
      <img width="60px" height="60px" src={`${URL_S3}${record.logo}`} />
    )
  );
};

ImageField.defaultProps = { label: "Logo" };

const ShopList = ({ permissions, ...props }) => {
  console.log(props);

  const [user, setUser] = useState({});

  useEffect(() => {
    var token = localStorage.getItem("feathers-jwt");
    console.log(token);
    const user1 = jwt_decode(token);
    setUser(user1);
    console.log(user, "-------------");
    console.log(user1, "-------------");
  }, []);

  return (
    // console.log(user)
    <List
      {...props}
      filters={<Filters />}
      bulkActionButtons={false}
      exporter={false}
      title={<Title />}
      filterDefaultValues={user.shop ? { id: user.shop && user.shop } : false}
    >
      <Datagrid>
        {permissions === "admin" && <TextField source="id" label="id" />}
        <ImageField />
        <TextField source="name" label="Nombre" />
        {permissions === "admin" && <TextField source="nit" label="Nit" />}
        {permissions === "admin" && (
          <TextField source="status" label="Estado" />
        )}
        <CurrentStatusField />

        {permissions === "admin" && (
          <TextField source="phone" label="Telefono" />
        )}
        {permissions === "admin" && (
          <TextField source="category.name" label="Categoria" />
        )}
        {permissions === "admin" && (
          <TextField source="user_id" label="Usuario" />
        )}
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
