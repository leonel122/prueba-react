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
  CreateButton,
} from "react-admin";
import { Title } from "./";
import { URL_S3 } from "../../constants";
import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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

const Empty = () => {
  return (
    <Box textAlign="center" m={1}>
      <Typography variant="h6" paragraph style={{ fontWeight: "bold" }}>
        Aun no tienes productos
      </Typography>
      {/* <Link to="/products/create">
        <Button variant="contained" color="primary">
          Crear
        </Button>
      </Link> */}
      <Typography variant="body" paragraph style={{ fontWeight: "bold" }}>
        Agrega uno en el boton +
      </Typography>
      <CreateButton label="Crear producto" basePath={"/products/create"} />
    </Box>
  );
};

const ProductsList = ({ permissions, ...props }) => {
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
    <List
      {...props}
      filters={<Filters />}
      // exporter={true}
      title={<Title />}
      bulkActionButtons={false}
      empty={<Empty />}
      filterDefaultValues={
        user.shop ? { shop_id: user.shop && user.shop } : false
      }
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

export default ProductsList;
