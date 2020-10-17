import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { Title } from "./";
const Filters = ({ permissions, ...props }) => (
  <Filter {...props}>
    {permissions == "admin" && (
      <ReferenceInput
        label="Tienda"
        source="shop_id"
        reference="shops"
        alwaysOn
      >
        <SelectInput fullWidth source="shop_id" label="Tienda" alwaysOn />
      </ReferenceInput>
    )}
    <ReferenceInput
      label="Localidad"
      source="locality_id"
      reference="localities"
      alwaysOn
    >
      <SelectInput fullWidth source="locality_id" label="Tienda" alwaysOn />
    </ReferenceInput>
  </Filter>
);

const ShopList = ({ permissions, ...props }) => {
  return (
    <List
      {...props}
      filters={<Filters />}
      bulkActionButtons={false}
      exporter={false}
      create={false}
      title={<Title />}
      actions={false}
    >
      <Datagrid>
        {permissions == "admin" && <TextField source="id" label="id" />}
        {permissions == "admin" && (
          <TextField source="shop.name" label="Tienda" />
        )}
        <TextField source="locality.name" label="Localidad" />
        <TextField source="price" label="Precio" />
        <EditButton label="Editar" />
        {/* <DeleteButton label="Eliminar" /> */}
      </Datagrid>
    </List>
  );
};

export default ShopList;
