import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  SelectInput,
  ReferenceInput,
  DeleteButton,
} from "react-admin";

const Filters = (props) => (
  <Filter {...props}>
    <ReferenceInput label="Tienda" source="shop_id" reference="shops" alwaysOn>
      <SelectInput fullWidth source="shop_id" label="Tienda" alwaysOn />
    </ReferenceInput>
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

const ShopList = (props) => {
  return (
    <List {...props} filters={<Filters />} exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="shop.name" label="Tienda" />
        <TextField source="locality.name" label="Localidad" />
        <EditButton label="Editar" />
        <DeleteButton label="Eliminar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
